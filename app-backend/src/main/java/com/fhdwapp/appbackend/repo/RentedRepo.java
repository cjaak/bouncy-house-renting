package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Rented;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Optional;

/**
 * Interface of hibernate for rented
 */
public interface RentedRepo extends JpaRepository<Rented, Long> {
    /**
     * deltes specific rented entry
     * @param id rented id
     */
    void deleteById(Long id);

    /**
     * Retrieves all rented entries for a specifx bouncy house
     * @param bouncyHouseId bouncy house id
     * @return Collection of rented
     */
    Collection<Rented> findAllByBouncyHouseId(Long bouncyHouseId);

    /**
     * Retrieves all rented entries of a specific user
     * @param userId user id
     * @return Collection of rented
     */
    Collection<Rented> findAllByUserId(Long userId);

    /**
     * Returns an object if a bouncy house is currently or in the future rented
     * @param bouncyHouseId bouncy house id
     * @param endDate today
     * @return rented object or empty optional
     */
    Optional<Rented> findTopByBouncyHouseIdAndEndDateAfter(Long bouncyHouseId, LocalDate endDate);

    /**
     * Retrieces all rented entries in the future
     * @param startDate today
     * @return Collection of rented entries
     */
    Collection<Rented> findAllByStartDateGreaterThan(LocalDate startDate);

    /**
     * Retriecves all rented entries that belong to currently rented bouncy houses
     * @param endDate today
     * @param startDate today
     * @return Collection of rented
     */
    Collection<Rented> findAllByStartDateLessThanEqualAndEndDateGreaterThanEqual(LocalDate endDate, LocalDate startDate);
}
