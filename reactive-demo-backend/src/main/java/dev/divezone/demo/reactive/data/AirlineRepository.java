package dev.divezone.demo.reactive.data;

import java.util.List;
import java.util.Optional;

import dev.divezone.demo.reactive.model.Airline;

import org.springframework.data.repository.Repository;

public interface AirlineRepository extends Repository<Airline, Integer> {

    Optional<Airline> findById(Integer id);

    List<Airline> findAirlineByCountry(String country);

    void save(Airline entity);

}
