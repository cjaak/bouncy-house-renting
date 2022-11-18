package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Favourite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

public interface FavouriteRepo extends JpaRepository<Favourite, Long> {
    Collection<Favourite> findAllByUserId(Long userId);
    Optional<Favourite> findByBouncyHouseIdAndUserId(Long bouncyHouseId, Long userId);
}
