package com.fhdwapp.appbackend;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.repo.BouncyHouseRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.lang.reflect.Array;
import java.util.Arrays;

@SpringBootApplication
public class AppBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner run(BouncyHouseRepo bouncyHouseRepo) {
        return args -> {
            bouncyHouseRepo.save(new BouncyHouse(null, "tolle M Burg", 78.0, BouncyHouseSize.M,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg"));
            bouncyHouseRepo.save(new BouncyHouse(null, "tolle S Burg", 59.0, BouncyHouseSize.S,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg"));
            bouncyHouseRepo.save(new BouncyHouse(null, "tolle L Burg", 345.0, BouncyHouseSize.L,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg"));
            bouncyHouseRepo.save(new BouncyHouse(null, "tolle XL Burg", 34534.0, BouncyHouseSize.XL,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg"));
        };
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:3000", "http://localhost:4200"));
        corsConfiguration.setAllowedHeaders(Arrays.asList("Origin", "Access-Control-Allow-Origin", "Content-Type", "Accept", "Jwt-Token", "Authorization", "Origin, Accept", "X-Request-With", "Access-Control-Request-Method", "Access-Control-Request-Headers"));
        corsConfiguration.setExposedHeaders(Arrays.asList("Origin", "Content-Type", "Accept", "Jwt-Token", "Authorization","Access-Control-Allow-Origin", "Access-Control-Allow-Origin", "Access-Control-Allow-Credentials", "Filename"));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(urlBasedCorsConfigurationSource);
    }

}
