package dev.divezone.demo.reactive

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ReactiveDemoApplication

fun main(args: Array<String>) {
	runApplication<ReactiveDemoApplication>(*args)
}
