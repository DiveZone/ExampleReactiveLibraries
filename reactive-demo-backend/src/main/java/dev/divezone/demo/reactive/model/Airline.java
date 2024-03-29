package dev.divezone.demo.reactive.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "AIRLINE")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Airline {

    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ALIAS")
    private String alias;

    @Column(name = "IATA", length = 2)
    private String iata;

    @Column(name = "ICAO", length = 3)
    private String icao;

    @Column(name = "CALLSIGN")
    private String callsign;

    @Column(name = "COUNTRY")
    private String country;

    @Column(name = "ACTIVE", length = 1)
    private String active;

    @Column(name = "FAVORITE")
    private boolean favorite = false;

}
