package com.fhdwapp.appbackend;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import com.fhdwapp.appbackend.enumeration.BouncyHouseTheme;
import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.model.User;
import com.fhdwapp.appbackend.repo.BouncyHouseRepo;
import com.fhdwapp.appbackend.repo.RentedRepo;
import com.fhdwapp.appbackend.repo.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.time.LocalDate;
import java.util.Arrays;

@SpringBootApplication
public class AppBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner run(BouncyHouseRepo bouncyHouseRepo, UserRepo userRepo, RentedRepo rentedRepo) {
        return args -> {
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "tolle Tier M Burg",
                    BouncyHouseTheme.Animal,
                    BouncyHouseSize.M,
                    500.0,
                    90,
                    78.0,
                    true,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "tolle Cowboy S Burg",
                    BouncyHouseTheme.Cowboy,
                    BouncyHouseSize.S,
                    300.0,
                    35,
                    60.0,
                    false,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "tolle Prinzessin XL Burg",
                    BouncyHouseTheme.Princess,
                    BouncyHouseSize.XL,
                    1000.0,
                    120,
                    100.0,
                    true,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg",
                    true
            ));
            userRepo.save(new User(
                    null,
                    "John",
                    "Doe",
                    "john.doe@gmail.com",
                    "12345678",
                    LocalDate.of(1990, 11, 11),
                    "Klingenderstr",
                    "23b",
                    33100,
                    "Paderborn"
            ));
            rentedRepo.save(new Rented(
                    null,
                    1L,
                    1L,
                    LocalDate.of(2022, 12, 24),
                    LocalDate.of(2022, 12, 27)
            ));
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
