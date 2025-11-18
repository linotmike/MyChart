package com.MyChart.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("MyChart API")
                        .version("0.0.1")
                        .description("REST API documentation for the MyChart application")
                        .contact(new Contact().name("MyChart Team").email("devnull@example.com"))
                        .license(new License().name("Apache 2.0").url("http://springdoc.org"))
                );
    }
}

