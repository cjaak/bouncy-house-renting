package com.fhdwapp.appbackend.resource;

import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.model.Response;
import com.fhdwapp.appbackend.service.implementation.BouncyHouseServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

import static java.time.LocalDateTime.now;
import static java.util.Map.*;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

/**
 * The type Bouncy house resource.
 */
@RestController
@RequestMapping("/bouncy-house")
@RequiredArgsConstructor
public class BouncyHouseResource {
    private final BouncyHouseServiceImpl bouncyHouseService;

    /**
     * Gets bouncy houses.
     *
     * @return the bouncy houses
     */
    @GetMapping("")
    public ResponseEntity<Response> getBouncyHouses() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("bouncy_houses", bouncyHouseService.getAll()))
                .message("bouncy houses retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets bouncy houses by favourite by user id.
     *
     * @param id the id
     * @return the bouncy houses by favourite by user id
     */
    @GetMapping("/favourite/user/{id}")
    public ResponseEntity<Response> getBouncyHousesByFavouriteByUserId(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("bouncy_houses", bouncyHouseService.getAllByFavouriteByUserId(id)))
                .message("bouncy houses retrieved")
                 .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets visible bouncy houses.
     *
     * @return the visible bouncy houses
     */
    @GetMapping("/visible")
    public ResponseEntity<Response> getVisibleBouncyHouses() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("bouncy_houses", bouncyHouseService.getAllVisible()))
                .message("bouncy houses (visible) retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Save bouncy house response entity.
     *
     * @param house the house
     * @return the response entity
     */
    @PostMapping("/save")
    public ResponseEntity<Response> saveBouncyHouse(@RequestBody @Valid BouncyHouse house) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("bouncy_house", bouncyHouseService.create(house)))
                .message("bouncy house created")
                .status(CREATED)
                .statusCode(CREATED.value())
                .build()
        );
    }

    /**
     * Update bouncy house response entity.
     *
     * @param id    the id
     * @param house the house
     * @return the response entity
     */
    @PutMapping("/{id}")
    public ResponseEntity<Response> updateBouncyHouse(@PathVariable("id") Long id, @RequestBody @Valid BouncyHouse house) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("bouncy_house", bouncyHouseService.update(house)))
                .message("bouncy house updated")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets bouncy house.
     *
     * @param id the id
     * @return the bouncy house
     */
    @GetMapping("/{id}")
    public ResponseEntity<Response> getBouncyHouse(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("bouncy_house", bouncyHouseService.get(id)))
                .message("bouncy house retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Delete bouncy house response entity.
     *
     * @param id the id
     * @return the response entity
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteBouncyHouse(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("deleted", bouncyHouseService.delete(id)))
                .message("bouncy house deleted")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }




}
