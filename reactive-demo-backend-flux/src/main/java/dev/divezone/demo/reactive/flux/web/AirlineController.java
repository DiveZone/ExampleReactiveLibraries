package dev.divezone.demo.reactive.flux.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.divezone.demo.reactive.flux.data.AirlineRepository;
import dev.divezone.demo.reactive.flux.model.Airline;
import lombok.AllArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/api/airline")
@AllArgsConstructor
public class AirlineController {

    private final AirlineRepository repository;

    @GetMapping
    public Flux<Airline> index() {
        return repository.findAirlineByCountry("netherlands");
    }

    @GetMapping(value = "/{country}")
    public Flux<Airline> getForCountry(
            @PathVariable final String country
    ) {
        return repository.findAirlineByCountry(country);
    }

    @GetMapping(value = "/{id}/{favorite}")
    public Mono<Airline> setFavorite(
            @PathVariable final Integer id,
            @PathVariable final boolean favorite
    ) {
        return repository.findById(id)
                .map(airline -> {
                    airline.setFavorite(favorite);
                    return airline;
                })
                .flatMap(repository::save);
    }
}
