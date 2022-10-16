package com.fhdwapp.appbackend.resource;

import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.model.Response;
import com.fhdwapp.appbackend.service.implementation.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserResource {
    private final UserServiceImpl userService;

    @GetMapping("")
    public ResponseEntity<Response> getUsers() {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("users", userService.getAll()))
                .message("users retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getUser(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("user", userService.get(id)))
                .message("user retrieved")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    @GetMapping("/login")
    public ResponseEntity<Response> getBouncyHouse(@RequestBody String email, @RequestBody String password) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("userId", userService.login(email, password)))
                .message("returned auth status")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response> deleteUser(@PathVariable("id") Long id) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("deleted", userService.delete(id)))
                .message("user deleted")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }


}
