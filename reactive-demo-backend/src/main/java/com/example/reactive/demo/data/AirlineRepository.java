package com.example.reactive.demo.data;

import java.util.List;
import java.util.Optional;

import com.example.reactive.demo.model.Airline;

import org.springframework.data.repository.Repository;

public interface AirlineRepository extends Repository<Airline, Integer> {

    List<Airline> findAll();

    Optional<Airline> findById(Integer id);

    List<Airline> findAirlineByCountry(String country);

    Airline save(Airline entity);

}
