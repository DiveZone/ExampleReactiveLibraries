package com.example.reactive.demo.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.example.reactive.demo.setup.Setup;
import com.example.reactive.demo.web.AirlineController;

@Configuration
@ComponentScan(basePackageClasses = { Setup.class, AirlineController.class })
public class WebConfig {
}
