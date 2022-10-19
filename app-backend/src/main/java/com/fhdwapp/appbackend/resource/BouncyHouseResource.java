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

@RestController
@RequestMapping("/bouncy-house")
@RequiredArgsConstructor
public class BouncyHouseResource {
    private final BouncyHouseServiceImpl bouncyHouseService;

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
