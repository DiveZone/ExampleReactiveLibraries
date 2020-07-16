package dev.divezone.demo.reactive.data;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import dev.divezone.demo.reactive.model.Airline;

public interface AirlineRepository extends CrudRepository<Airline, Integer> {

    List<Airline> findAirlineByCountry(String country);

}
