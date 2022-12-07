package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.BouncyHouse;

import java.util.Collection;

/**
 * The interface Bouncy house service.
 */
public interface BouncyHouseService {
    /**
     * Create bouncy house.
     *
     * @param house the house
     * @return the bouncy house
     */
    BouncyHouse create(BouncyHouse house);

    /**
     * Gets all.
     *
     * @return the all
     */
    Collection<BouncyHouse> getAll();

    /**
     * Gets all by favourite by user id.
     *
     * @param id the id
     * @return the all by favourite by user id
     */
    Collection<BouncyHouse> getAllByFavouriteByUserId(Long id);

    /**
     * Gets all visible.
     *
     * @return the all visible
     */
    Collection<BouncyHouse> getAllVisible();

    /**
     * Get bouncy house.
     *
     * @param id the id
     * @return the bouncy house
     */
    BouncyHouse get(Long id);

    /**
     * Update bouncy house.
     *
     * @param house the house
     * @return the bouncy house
     */
    BouncyHouse update(BouncyHouse house);

    /**
     * Delete boolean.
     *
     * @param id the id
     * @return the boolean
     */
    Boolean delete(Long id);
}
