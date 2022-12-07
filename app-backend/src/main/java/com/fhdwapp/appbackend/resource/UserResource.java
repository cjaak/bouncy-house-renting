package com.fhdwapp.appbackend.resource;

import com.fhdwapp.appbackend.model.Response;
import com.fhdwapp.appbackend.model.User;
import com.fhdwapp.appbackend.service.implementation.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import java.util.Map;

import static java.time.LocalDateTime.now;
import static java.util.Map.of;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

/**
 * The type User resource.
 */
@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserResource {
    private final UserServiceImpl userService;

    /**
     * Gets users.
     *
     * @return the users
     */
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

    /**
     * Save user response entity.
     *
     * @param user the user
     * @return the response entity
     */
    @PostMapping("/save")
    public ResponseEntity<Response> saveUser(@RequestBody @Valid User user) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("user", userService.create(user)))
                .message("user created")
                .status(CREATED)
                .statusCode(CREATED.value())
                .build()
        );
    }

    /**
     * Update user response entity.
     *
     * @param id   the id
     * @param user the user
     * @return the response entity
     */
    @PostMapping("/{id}}")
    public ResponseEntity<Response> updateUser(@PathVariable("id") Long id, @RequestBody @Valid User user) {
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("user", userService.update(user)))
                .message("user created")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }


    /**
     * Gets user.
     *
     * @param id the id
     * @return the user
     */
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


    /**
     * Login response entity.
     *
     * @param json the json
     * @return the response entity
     */
    @GetMapping("/login")
    public ResponseEntity<Response> login(@RequestBody Map<String, String> json) {
        String email = json.get("email");
        String password = json.get("password");
        return ResponseEntity.ok(Response.builder()
                .timeStamp(now())
                .data(of("isLoggedIn", userService.login(email, password)))
                .message("returned auth status")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Login user response entity.
     *
     * @param json the json
     * @return the response entity
     */
    @PostMapping("/login")
    public ResponseEntity<Response> loginUser(@RequestBody Map<String, String> json) {
        String email = json.get("email");
        String password = json.get("password");
        return ResponseEntity.ok(com.fhdwapp.appbackend.model.Response.builder()
                .timeStamp(now())
                .data(of("userId", userService.loginUser(email, password)))
                .message("returned auth status")
                .status(OK)
                .statusCode(OK.value())
                .build()
        );
    }

    /**
     * Delete user response entity.
     *
     * @param id the id
     * @return the response entity
     */
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
