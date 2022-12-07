package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.Rented;

import java.time.LocalDate;
import java.util.Collection;

/**
 * The interface Rented service.
 */
public interface RentedService {
    /**
     * Create rented.
     *
     * @param rented the rented
     * @return the rented
     */
    Rented create(Rented rented);

    /**
     * Gets all.
     *
     * @return the all
     */
    Collection<Rented> getAll();

    /**
     * Gets all by bouncy house id.
     *
     * @param bouncyHouseID the bouncy house id
     * @return the all by bouncy house id
     */
    Collection<Rented> getAllByBouncyHouseId(Long bouncyHouseID);

    /**
     * Gets all by user id.
     *
     * @param userId the user id
     * @return the all by user id
     */
    Collection<Rented> getAllByUserId(Long userId);

    /**
     * Get rented.
     *
     * @param id the id
     * @return the rented
     */
    Rented get(Long id);

    /**
     * Update rented.
     *
     * @param rented the rented
     * @return the rented
     */
    Rented update(Rented rented);

    /**
     * Delete boolean.
     *
     * @param id the id
     * @return the boolean
     */
    Boolean delete(Long id);

    /**
     * Gets all in use.
     *
     * @return the all in use
     */
    Collection<Rented> getAllInUse();

    /**
     * Gets all new.
     *
     * @return the all new
     */
    Collection<Rented> getAllNew();


}
