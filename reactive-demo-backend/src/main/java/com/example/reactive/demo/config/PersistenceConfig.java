package com.example.reactive.demo.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.example.reactive.demo.data.AirlineRepository;
import com.example.reactive.demo.model.Airline;

@Configuration
@EnableJpaRepositories(
  basePackageClasses = AirlineRepository.class
)
@EntityScan(
  basePackageClasses = Airline.class
)
public class PersistenceConfig {

}
