package dev.divezone.demo.reactive.web

import dev.divezone.demo.reactive.data.AirlineRepository
import dev.divezone.demo.reactive.model.Airline
import org.springframework.data.repository.findByIdOrNull
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod.GET
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping(value = ["/api/airline"], produces = ["application/json"])
class AirlineController(val repository: AirlineRepository) {

    @RequestMapping(value = ["/{country}"], method = [GET])
    fun getForCountry(
            @PathVariable country: String
    ) = repository.findAirlineByCountry(country)

    @RequestMapping(value = ["/{id}/{favorite}"], method = [GET])
    fun setFavorite(
            @PathVariable id: Int,
            @PathVariable favorite: Boolean
    ): Airline? = repository.findByIdOrNull(id)?.let {
        it.favorite = favorite
        repository.save(it)
        it
    }

    @RequestMapping(method = [GET])
    fun index() = repository.findAirlineByCountry("Netherlands")
}