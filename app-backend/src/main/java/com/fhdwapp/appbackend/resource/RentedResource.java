package com.fhdwapp.appbackend.resource;

import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.model.Response;
import com.fhdwapp.appbackend.repo.RentedRepo;
import com.fhdwapp.appbackend.service.implementation.RentedServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/rented")
@RequiredArgsConstructor
public class RentedResource {
    private final RentedServiceImpl rentedService;

    @GetMapping("")
    public ResponseEntity<Response> getRentedEntries() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.getAll()))
                .message("rented entries retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getRentedEntry(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.get(id)))
                .message("rented entries retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }


    @GetMapping("/user/{id}")
    public ResponseEntity<Response> getRentedEntriesByUser(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.getAllByUserId(id)))
                .message("rented entries retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    @GetMapping("/bouncy-house/{id}")
    public ResponseEntity<Response> getRentedEntriesByBouncyHouse(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.getAllByBouncyHouseId(id)))
                .message("rented entries retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    @GetMapping("/save")
    public ResponseEntity<Response> saveRentedEntry(@RequestBody @Valid Rented rented) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.create(rented)))
                .message("rented entries retrieved")
                .status(CREATED)
                .statusCode(CREATED.value())
                .build()
        );
    }



}