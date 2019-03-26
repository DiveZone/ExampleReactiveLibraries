package com.example.reactive.demo.data;

import java.util.List;

import com.example.reactive.demo.model.Airline;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AirlineRepository extends JpaRepository<Airline, Integer> {

    List<Airline> findAirlineByCountry(String country);

}
