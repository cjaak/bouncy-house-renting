package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

public interface RatingRepo extends JpaRepository<Rating, Long> {
    Collection<Rating> findAllByBouncyHouseId(Long bouncyHouseId);
    Collection<Rating> findAllByUserId(Long userId);
    Optional<Rating> findByRentedId(Long rentedId);
}
