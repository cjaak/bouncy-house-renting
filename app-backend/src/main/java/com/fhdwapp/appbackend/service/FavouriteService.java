package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.Favourite;

import java.util.Collection;
import java.util.Optional;

public interface FavouriteService {
    Favourite create(Favourite favourite);
    Boolean delete(Long id);
    Favourite get(Long id);

    Collection<Favourite> getAllByUserId(Long userId);

    Boolean findFavouriteByBouncyHouseAndUserId(Long BouncyHouseId ,Long userId);
}
