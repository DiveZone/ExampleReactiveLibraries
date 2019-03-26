package com.example.reactive.demo.config;

import com.example.reactive.demo.data.AirlineRepository;
import com.example.reactive.demo.model.Airline;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(
        basePackageClasses = AirlineRepository.class
)
@EntityScan(
        basePackageClasses = Airline.class
)
public class PersistenceConfig {

}
