package com.example.reactive.demo.web;

import java.util.List;

import com.example.reactive.demo.data.AirlineRepository;
import com.example.reactive.demo.model.Airline;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/airline", produces = "application/json")
public class AirlineController {

    private final AirlineRepository repository;

    @Autowired
    public AirlineController(final AirlineRepository repository) {
        this.repository = repository;
    }

    @RequestMapping("/{country}")
    public List<Airline> getForCountry(
            @PathVariable final String country
    ) {
        return repository.findAirlineByCountry(country);
    }

    @RequestMapping("/{id}/{favorite}")
    public Airline setFavorite(
            @PathVariable final Integer id,
            @PathVariable final boolean favorite
    ) {
        Airline a = repository.findById(id).get();
        a.setFavorite(favorite);
        return repository.save(a);
    }

    @RequestMapping("/")
    public List<Airline> index() {
        return repository.findAirlineByCountry("Netherlands");
    }

}
