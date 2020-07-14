package dev.divezone.demo.reactive.config

import dev.divezone.demo.reactive.setup.Setup
import dev.divezone.demo.reactive.web.AirlineController
import org.springframework.context.annotation.ComponentScan
import org.springframework.context.annotation.Configuration

@Configuration
@ComponentScan(basePackageClasses = [Setup::class, AirlineController::class])
class WebConfig