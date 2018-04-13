package com.example.reactive.demo.data;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.reactive.demo.model.Airline;

public interface AirlineRepository extends JpaRepository<Airline, Integer> {

  List<Airline> findAirlineByCountry(String country);

}
