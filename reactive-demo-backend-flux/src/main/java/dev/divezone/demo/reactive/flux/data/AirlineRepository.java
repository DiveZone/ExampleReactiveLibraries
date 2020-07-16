package dev.divezone.demo.reactive.flux.data;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import dev.divezone.demo.reactive.flux.model.Airline;
import reactor.core.publisher.Flux;

public interface AirlineRepository extends ReactiveCrudRepository<Airline, Integer> {

    Flux<Airline> findAirlineByCountry(String country);

}
