package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.Rented;

import java.time.LocalDate;
import java.util.Collection;

public interface RentedService {
    Rented create(Rented rented);
    Collection<Rented> getAll();
    Collection<Rented> getAllByBouncyHouseId(Long bouncyHouseID);
    Collection<Rented> getAllByUserId(Long userId);
    Rented get(Long id);
    Rented update(Rented rented);
    Boolean delete(Long id);

    Collection<Rented> getAllInUse();

    Collection<Rented> getAllNew();


}
