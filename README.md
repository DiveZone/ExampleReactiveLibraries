# ExampleReactiveLibraries
Simple Front-end samples of consuming a REST service, 
- Angular (ng) 
- Angular with NgRX
- Angular with NgXS

Each can be started with (one at the time):
```
npm start
```
CTRL+C to stop the front-end server.
The front-end will run on http://localhost:4200

**please note**: backend needs to be running, before starting the front-end.

#### Requirements for running front-end:
- Node 12 LTS or higher.

## Backend
This angular samples needs a backend and I have included two versions, one written in Java and one in Kotlin, both are Spring Boot applications and can be started with:
```
mvn spring-boot:run
```
CTRL+C to stop the backend server.

**please note**: Only start one at the time, they are both using port 8080.

#### Requirements for running backend:
- Java 11 or higher
- Maven 3.5 or higher
- Internet connection