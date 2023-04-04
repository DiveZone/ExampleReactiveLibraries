package dev.divezone.demo.reactive.setup;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;

import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import dev.divezone.demo.reactive.data.AirlineRepository;
import dev.divezone.demo.reactive.model.Airline;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
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
