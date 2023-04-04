CREATE TABLE IF NOT EXISTS airline (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    alias VARCHAR(255),
    iata CHAR(2),
    icao CHAR(3),
    callsign VARCHAR(255),
    country VARCHAR(255),
    active CHAR(2),
    favorite BOOLEAN
);