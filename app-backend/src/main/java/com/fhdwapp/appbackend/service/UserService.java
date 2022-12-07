package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.User;

import java.util.Collection;
import java.util.Optional;

/**
 * The interface User service.
 */
public interface UserService {
    /**
     * Register user.
     *
     * @param email    the email
     * @param password the password
     * @return the user
     */
    User register(String email, String password);

    /**
     * Create optional.
     *
     * @param user the user
     * @return the optional
     */
    Optional<User> create(User user);

    /**
     * Gets all.
     *
     * @return the all
     */
    Collection<User> getAll();

    /**
     * Login user optional.
     *
     * @param email    the email
     * @param password the password
     * @return the optional
     */
    Optional<Long> loginUser(String email, String password);

    /**
     * Get user.
     *
     * @param id the id
     * @return the user
     */
    User get(Long id);

    /**
     * Login boolean.
     *
     * @param email    the email
     * @param password the password
     * @return the boolean
     */
    Boolean login(String email, String password);

    /**
     * Update user.
     *
     * @param user the user
     * @return the user
     */
    User update(User user);

    /**
     * Delete boolean.
     *
     * @param id the id
     * @return the boolean
     */
    Boolean delete(Long id);
}
