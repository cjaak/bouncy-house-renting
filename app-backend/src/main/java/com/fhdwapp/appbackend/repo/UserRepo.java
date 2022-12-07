package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Interface of hibernate for users
 */
public interface UserRepo extends JpaRepository<User, Long> {
    /**
     * deletes specific user
     * @param id user id
     */
    void deleteById(Long id);

    /**
     * Retrieves if available an user by email and password (login)
     * @param email email from user input
     * @param password password from user input
     * @return a user object or an empty optional
     */
    Optional<User> findFirstByEmailAndPassword(String email, String password);

    /**
     * Retrieves if avaible a user with a specific email
     * @param email email
     * @return user object or empty optional
     */
    Optional<User> findByEmail(String email);
}
