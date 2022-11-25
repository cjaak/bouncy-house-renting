package com.fhdwapp.appbackend;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import com.fhdwapp.appbackend.enumeration.BouncyHouseTheme;
import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.model.Rating;
import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.model.User;
import com.fhdwapp.appbackend.repo.BouncyHouseRepo;
import com.fhdwapp.appbackend.repo.RatingRepo;
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
    CommandLineRunner run(BouncyHouseRepo bouncyHouseRepo, UserRepo userRepo, RentedRepo rentedRepo, RatingRepo ratingRepo) {
        return args -> {
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "Schloss",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    BouncyHouseTheme.Prinzessin,
                    BouncyHouseSize.M,
                    500.0,
                    90,
                    78.0,
                    true,
                    "https://m.media-amazon.com/images/I/71p3+odK-cL.jpg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "Wilder Westen",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    BouncyHouseTheme.Cowboy,
                    BouncyHouseSize.S,
                    300.0,
                    35,
                    60.0,
                    false,
                    "https://eveprocom.de/wp-content/uploads/2018/01/huepfburg-cowboy.jpg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "Bahnhof",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    BouncyHouseTheme.Zug,
                    BouncyHouseSize.XL,
                    1000.0,
                    120,
                    100.0,
                    true,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "Schloss",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    BouncyHouseTheme.Prinzessin,
                    BouncyHouseSize.M,
                    500.0,
                    90,
                    78.0,
                    true,
                    "https://m.media-amazon.com/images/I/71p3+odK-cL.jpg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "Wilder Westen",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    BouncyHouseTheme.Cowboy,
                    BouncyHouseSize.S,
                    300.0,
                    35,
                    60.0,
                    false,
                    "https://eveprocom.de/wp-content/uploads/2018/01/huepfburg-cowboy.jpg",
                    true
            ));
            bouncyHouseRepo.save(new BouncyHouse(
                    null,
                    "Bahnhof",
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    BouncyHouseTheme.Zug,
                    BouncyHouseSize.XL,
                    1000.0,
                    120,
                    100.0,
                    true,
                    "https://i5.walmartimages.com/asr/8f12875d-4395-4910-ba92-09cd2807a708.d00dd91beaf247d986c50f78fa1c1da8.jpeg",
                    false
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
                    LocalDate.of(2022, 12, 27),
                    true
            ));
            rentedRepo.save(new Rented(
                    null,
                    1L,
                    2L,
                    LocalDate.of(2022, 10, 24),
                    LocalDate.of(2022, 12, 27),
                    false
            ));
            rentedRepo.save(new Rented(
                    null,
                    1L,
                    3L,
                    LocalDate.of(2022, 11, 1),
                    LocalDate.of(2022, 12, 1),
                    false
            ));
            ratingRepo.save(new Rating(
                    null,
                    1L,
                    1L,
                    1L,
                    3,
                    "Die Kinder sind zufrieden. Aufbau dauert zu lange."
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
