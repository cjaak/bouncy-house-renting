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

/**
 * The type Rented resource.
 */
@RestController
@RequestMapping("/rented")
@RequiredArgsConstructor
public class RentedResource {
    private final RentedServiceImpl rentedService;

    /**
     * Gets rented entries.
     *
     * @return the rented entries
     */
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

    /**
     * Gets rented entry.
     *
     * @param id the id
     * @return the rented entry
     */
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


    /**
     * Gets rented entries by user.
     *
     * @param id the id
     * @return the rented entries by user
     */
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

    /**
     * Gets rented entries by bouncy house.
     *
     * @param id the id
     * @return the rented entries by bouncy house
     */
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

    /**
     * Save rented entry response entity.
     *
     * @param rented the rented
     * @return the response entity
     */
    @PostMapping("/save")
    public ResponseEntity<Response> saveRentedEntry(@RequestBody @Valid Rented rented) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.create(rented)))
                .message("rented entry created")
                .status(CREATED)
                .statusCode(CREATED.value())
                .build()
        );
    }

    /**
     * Gets rented entries in use.
     *
     * @return the rented entries in use
     */
    @GetMapping("/in-use")
    public ResponseEntity<Response> getRentedEntriesInUse() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.getAllInUse()))
                .message("rented entries in use retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Gets rented entries new.
     *
     * @return the rented entries new
     */
    @GetMapping("/new")
    public ResponseEntity<Response> getRentedEntriesNew() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("rented", rentedService.getAllNew()))
                .message("rented entries new retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }



}
