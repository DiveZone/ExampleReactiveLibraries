package dev.divezone.demo.reactive.flux.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table("airline")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Airline {

    @Id
    @Column("id")
    private Integer id;

    @Column("name")
    private String name;

    @Column("alias")
    private String alias;

    @Column("iata")
    private String iata;

    @Column("icao")
    private String icao;

    @Column("callsign")
    private String callsign;

    @Column("country")
    private String country;

    @Column("active")
    private String active;

    @Column("favorite")
    private boolean favorite = false;

}

