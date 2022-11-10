package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.Rating;

import java.util.Collection;

public interface RatingService {
    Collection<Rating> getAll();
    Collection<Rating> getAllByUserId(Long userId);
    Collection<Rating> getAllByBouncyHouseId(Long bouncyHouseId);
    Rating getByRentedId(Long rentedId);
    Rating get(Long id);
    Rating create(Rating rating);
    Rating update(Rating rating);
    Boolean delete(Long id);

}
