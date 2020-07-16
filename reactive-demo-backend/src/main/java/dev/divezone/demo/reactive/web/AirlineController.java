package dev.divezone.demo.reactive.web;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.divezone.demo.reactive.data.AirlineRepository;
import dev.divezone.demo.reactive.model.Airline;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "/api/airline", produces = "application/json")
@AllArgsConstructor
public class AirlineController {

    private final AirlineRepository repository;

    @RequestMapping(value = "/{country}", method = GET)
    public List<Airline> getForCountry(
            @PathVariable final String country
    ) {
        return repository.findAirlineByCountry(country);
    }

    @RequestMapping(value = "/{id}/{favorite}", method = GET)
    public Airline setFavorite(
            @PathVariable final Integer id,
            @PathVariable final boolean favorite
    ) {
        var result = repository.findById(id);
        if (result.isPresent()) {
            var airline = result.get();
            airline.setFavorite(favorite);
            repository.save(airline);
            return airline;
        }
        return null;
    }

    @RequestMapping(value = "/", method = GET)
    public List<Airline> index() {
        return repository.findAirlineByCountry("Netherlands");
    }

}
