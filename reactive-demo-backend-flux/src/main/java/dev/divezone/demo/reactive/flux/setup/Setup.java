package dev.divezone.demo.reactive.flux.setup;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.Duration;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.DependsOn;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import dev.divezone.demo.reactive.flux.data.AirlineRepository;
import dev.divezone.demo.reactive.flux.model.Airline;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
@DependsOn("initializer")
public class Setup {

    private final AirlineRepository repository;

    @EventListener(ApplicationReadyEvent.class)
    public void loadData() {
        var bootstrapSchema = CsvSchema.builder()
                .addColumn("id", CsvSchema.ColumnType.NUMBER)
                .addColumn("name", CsvSchema.ColumnType.STRING)
                .addColumn("alias", CsvSchema.ColumnType.STRING)
                .addColumn("iata", CsvSchema.ColumnType.STRING)
                .addColumn("icao", CsvSchema.ColumnType.STRING)
                .addColumn("callsign", CsvSchema.ColumnType.STRING)
                .addColumn("country", CsvSchema.ColumnType.STRING)
                .addColumn("active", CsvSchema.ColumnType.STRING)
                .build()
                .withoutHeader();

        try (
                var is = this.getClass().getClassLoader().getResourceAsStream("airlines.dat");
                var reader = new BufferedReader(new InputStreamReader(is))
        ) {

            final MappingIterator<Airline> readValues = new CsvMapper()
                    .readerFor(Airline.class)
                    .with(bootstrapSchema)
                    .readValues(reader);

            repository.saveAll(
                    readValues.readAll().stream()
                            .filter(airline -> airline.getActive().equals("Y"))
                            .peek(airline -> {
                                airline.setId(null);
                                airline.setIata(StringUtils.strip(airline.getIata(), "'\\"));
                                airline.setIcao(StringUtils.strip(airline.getIcao(), "'\\"));
                            })
                            .collect(Collectors.toList())
            ).blockLast(Duration.ofSeconds(10));

        } catch (final IOException e) {
            e.printStackTrace();
        }

    }
}

