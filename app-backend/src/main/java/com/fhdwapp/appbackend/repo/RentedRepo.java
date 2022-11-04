package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Rented;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Optional;

public interface RentedRepo extends JpaRepository<Rented, Long> {
    void deleteById(Long id);
    Collection<Rented> findAllByBouncyHouseId(Long bouncyHouseId);
    Collection<Rented> findAllByUserId(Long userId);

    Optional<Rented> findTopByBouncyHouseIdAndEndDateAfter(Long bouncyHouseId, LocalDate endDate);
    Collection<Rented> findAllByStartDateAfterAndEndDateBefore(LocalDate startDate, LocalDate endDate);
}
