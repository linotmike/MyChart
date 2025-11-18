# Swagger / OpenAPI for MyChart

This project uses springdoc-openapi to provide OpenAPI docs and the Swagger UI.

Where to access
- After starting the application (e.g. `./mvnw spring-boot:run`), the Swagger UI is available at:
  - http://localhost:8080/swagger-ui.html
  - or http://localhost:8080/swagger-ui/index.html

Notes
- The `springdoc-openapi-starter-webmvc-ui` dependency is already added to `pom.xml`.
- An `OpenApiConfig` class is provided under `com.MyChart.config` that sets API metadata.

If you want the Swagger UI disabled in production, set `springdoc.api-docs.enabled=false` and `springdoc.swagger-ui.enabled=false` in the respective `application-*.yml` profiles.

