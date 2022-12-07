package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.Favourite;

import java.util.Collection;
import java.util.Optional;

/**
 * The interface Favourite service.
 */
public interface FavouriteService {
    /**
     * Create favourite.
     *
     * @param favourite the favourite
     * @return the favourite
     */
    Favourite create(Favourite favourite);

    /**
     * Delete boolean.
     *
     * @param id the id
     * @return the boolean
     */
    Boolean delete(Long id);

    /**
     * Get favourite.
     *
     * @param id the id
     * @return the favourite
     */
    Favourite get(Long id);

    /**
     * Gets all by user id.
     *
     * @param userId the user id
     * @return the all by user id
     */
    Collection<Favourite> getAllByUserId(Long userId);

    /**
     * Find favourite by bouncy house and user id optional.
     *
     * @param BouncyHouseId the bouncy house id
     * @param userId        the user id
     * @return the optional
     */
    Optional<Favourite> findFavouriteByBouncyHouseAndUserId(Long BouncyHouseId ,Long userId);
}
