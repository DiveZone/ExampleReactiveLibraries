package dev.divezone.demo.reactive.data

import dev.divezone.demo.reactive.model.Airline
import org.springframework.data.repository.CrudRepository

interface AirlineRepository : CrudRepository<Airline, Int> {
    fun findAirlineByCountry(country: String): List<Airline>
    fun save(entity: Airline)
}
