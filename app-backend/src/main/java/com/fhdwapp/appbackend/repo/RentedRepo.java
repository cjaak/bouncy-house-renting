package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.Rented;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface RentedRepo extends JpaRepository<Rented, Long> {
    void deleteById(Long id);
    Collection<Rented> findAllByBouncyHouseId(Long bouncyHouseId);
    Collection<Rented> findAllByUserId(Long userId);
}
