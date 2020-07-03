package com.example.reactive.demo.setup;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;

import javax.annotation.PostConstruct;

import com.example.reactive.demo.data.AirlineRepository;
import com.example.reactive.demo.model.Airline;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Setup {

    private final AirlineRepository repository;

    @Autowired
    public Setup(final AirlineRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    private void loadData() {
        try (
                var is = new URL("https://raw.githubusercontent.com/DiveZone/ExampleReactiveLibraries/master/airlines.dat")
                        .openConnection()
                        .getInputStream();
                var reader = new BufferedReader(new InputStreamReader(is))
        ) {

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

            final MappingIterator<Airline> readValues = new CsvMapper().readerFor(Airline.class).with(bootstrapSchema)
                    .readValues(reader);

            readValues.readAll().stream()
                    .filter(airline -> airline.getActive().equals("Y"))
                    .forEach(airline -> {
                        airline.setIata(StringUtils.strip(airline.getIata(), "'\\"));
                        airline.setIcao(StringUtils.strip(airline.getIcao(), "'\\"));
                        repository.save(airline);
                    });

        } catch (final IOException e) {
            e.printStackTrace();
        }

    }
}
