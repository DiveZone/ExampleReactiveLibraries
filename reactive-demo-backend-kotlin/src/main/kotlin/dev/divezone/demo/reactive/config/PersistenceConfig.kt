package dev.divezone.demo.reactive.config

import dev.divezone.demo.reactive.data.AirlineRepository
import dev.divezone.demo.reactive.model.Airline
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

@Configuration
@EnableJpaRepositories(basePackageClasses = [AirlineRepository::class])
@EntityScan(basePackageClasses = [Airline::class])
class PersistenceConfig