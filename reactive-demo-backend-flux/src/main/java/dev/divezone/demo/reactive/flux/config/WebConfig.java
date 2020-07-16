package dev.divezone.demo.reactive.flux.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import dev.divezone.demo.reactive.flux.setup.Setup;
import dev.divezone.demo.reactive.flux.web.AirlineController;

@Configuration
@ComponentScan(basePackageClasses = {Setup.class, AirlineController.class})
public class WebConfig {
}
