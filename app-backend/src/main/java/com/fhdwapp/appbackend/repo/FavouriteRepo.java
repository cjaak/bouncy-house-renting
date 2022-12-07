package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

/**
 * Interface of hibernate for favourite
 */
public interface FavouriteRepo extends JpaRepository<Favourite, Long> {
    /**
     * Retrieves all favourite entries with the same user id
     * @param userId id, that is used to filter
     * @return Collection of favourites
     */
    Collection<Favourite> findAllByUserId(Long userId);

    /**
     * Retrieves a specific favourite entry by user id and bouncy house id
     * @param bouncyHouseId bouncy house id
     * @param userId user id
     * @return a favourite object or empty optional
     */
    Optional<Favourite> findByBouncyHouseIdAndUserId(Long bouncyHouseId, Long userId);
}
