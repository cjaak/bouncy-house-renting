package com.fhdwapp.appbackend.resource;

import com.fhdwapp.appbackend.model.Rating;
import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.model.Response;
import com.fhdwapp.appbackend.service.implementation.RatingServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

/**
 * The type Rating resource.
 */
@RestController
@RequestMapping("/rating")
@RequiredArgsConstructor
public class RatingResource {
    private final RatingServiceImpl ratingService;

    /**
     * Gets ratings.
     *
     * @return the ratings
     */
    @GetMapping("")
    public ResponseEntity<Response> getRatings() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("ratings", ratingService.getAll()))
                .message("ratings retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets ratings by user.
     *
     * @param id the id
     * @return the ratings by user
     */
    @GetMapping("/user/{id}")
    public ResponseEntity<Response> getRatingsByUser(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("ratings", ratingService.getAllByUserId(id)))
                .message("ratings retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets ratings by bouncy house.
     *
     * @param id the id
     * @return the ratings by bouncy house
     */
    @GetMapping("/bouncy-house/{id}")
    public ResponseEntity<Response> getRatingsByBouncyHouse(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("ratings", ratingService.getAllByBouncyHouseId(id)))
                .message("ratings retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets rating by rented.
     *
     * @param id the id
     * @return the rating by rented
     */
    @GetMapping("/rented/{id}")
    public ResponseEntity<Response> getRatingByRented(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rating", ratingService.getByRentedId(id)))
                .message("rating retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets rating.
     *
     * @param id the id
     * @return the rating
     */
    @GetMapping("/{id}")
    public ResponseEntity<Response> getRating(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rating", ratingService.get(id)))
                .message("rented entries retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Save rating response entity.
     *
     * @param rating the rating
     * @return the response entity
     */
    @PostMapping("/save")
    public ResponseEntity<Response> saveRating(@RequestBody @Valid Rating rating) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rating", ratingService.create(rating)))
                .message("rating created")
                .status(CREATED)
                .statusCode(CREATED.value())
                .build()
        );
    }

}
