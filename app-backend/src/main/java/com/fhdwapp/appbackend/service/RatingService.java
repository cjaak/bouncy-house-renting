package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.Rating;

import java.util.Collection;
import java.util.Optional;

/**
 * The interface Rating service.
 */
public interface RatingService {
    /**
     * Gets all.
     *
     * @return the all
     */
    Collection<Rating> getAll();

    /**
     * Gets all by user id.
     *
     * @param userId the user id
     * @return the all by user id
     */
    Collection<Rating> getAllByUserId(Long userId);

    /**
     * Gets all by bouncy house id.
     *
     * @param bouncyHouseId the bouncy house id
     * @return the all by bouncy house id
     */
    Collection<Rating> getAllByBouncyHouseId(Long bouncyHouseId);

    /**
     * Gets by rented id.
     *
     * @param rentedId the rented id
     * @return the by rented id
     */
    Optional<Rating> getByRentedId(Long rentedId);

    /**
     * Get optional.
     *
     * @param id the id
     * @return the optional
     */
    Optional<Rating> get(Long id);

    /**
     * Create rating.
     *
     * @param rating the rating
     * @return the rating
     */
    Rating create(Rating rating);

    /**
     * Update rating.
     *
     * @param rating the rating
     * @return the rating
     */
    Rating update(Rating rating);

    /**
     * Delete boolean.
     *
     * @param id the id
     * @return the boolean
     */
    Boolean delete(Long id);

}
