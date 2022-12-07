package com.fhdwapp.appbackend.resource;

import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.model.Favourite;
import com.fhdwapp.appbackend.model.Response;
import com.fhdwapp.appbackend.service.implementation.FavouriteServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

/**
 * The type Favourite resource.
 */
@RestController
@RequestMapping("/favourite")
@RequiredArgsConstructor
public class FavouriteResource {

    private final FavouriteServiceImpl favouriteService;

    /**
     * Gets favourites by user.
     *
     * @param id the id
     * @return the favourites by user
     */
    @GetMapping("/user/{id}")
    public ResponseEntity<Response> getFavouritesByUser(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("favourites", favouriteService.getAllByUserId(id)))
                .message("favourites retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets favourite.
     *
     * @param id the id
     * @return the favourite
     */
    @GetMapping("/{id}")
    public ResponseEntity<Response> getFavourite(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("favourite", favouriteService.get(id)))
                .message("favourite retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets favourite by bouncy house and user.
     *
     * @param bouncyHouseId the bouncy house id
     * @param userId        the user id
     * @return the favourite by bouncy house and user
     */
    @GetMapping("/bouncyHouse/{bouncyHouseId}/user/{userId}")
    public ResponseEntity<Response> getFavouriteByBouncyHouseAndUser(@PathVariable("bouncyHouseId") Long bouncyHouseId, @PathVariable("userId") Long userId) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("favourite", favouriteService.findFavouriteByBouncyHouseAndUserId(bouncyHouseId, userId)))
                .message("bouncy house retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Save favourite response entity.
     *
     * @param favourite the favourite
     * @return the response entity
     */
    @PostMapping("/save")
    public ResponseEntity<Response> saveFavourite(@RequestBody @Valid Favourite favourite) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("favourite", favouriteService.create(favourite)))
                .message("favourite created")
                .status(CREATED)
                .statusCode(CREATED.value())
                .build()
        );
    }

    /**
     * Delete favourite response entity.
     *
     * @param id the id
     * @return the response entity
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteFavourite(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("deleted", favouriteService.delete(id)))
                .message("favourite deleted")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }
}
