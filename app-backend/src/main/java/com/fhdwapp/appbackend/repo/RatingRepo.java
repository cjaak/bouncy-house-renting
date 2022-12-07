package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

/**
 * Interface of hibernate for rating entries
 */
public interface RatingRepo extends JpaRepository<Rating, Long> {
    /**
     * retrieves all ratings for a specific bouncy house
     * @param bouncyHouseId bouncy house id
     * @return Collection of ratings
     */
    Collection<Rating> findAllByBouncyHouseId(Long bouncyHouseId);

    /**
     * Retrieves all ratings for a specific user
     * @param userId user id
     * @return Collection of ratings
     */
    Collection<Rating> findAllByUserId(Long userId);

    /**
     * Retrieves a specific rating for a specify rented entry
     * @param rentedId rented id
     * @return rating object or empty optional object
     */
    Optional<Rating> findByRentedId(Long rentedId);
}
