package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.Favourite;
import com.fhdwapp.appbackend.repo.FavouriteRepo;
import com.fhdwapp.appbackend.service.FavouriteService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.Collection;
import java.util.Optional;

import static java.lang.Boolean.*;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class FavouriteServiceImpl implements FavouriteService {

    private final FavouriteRepo favouriteRepo;

    @Override
    public Favourite create(Favourite favourite) {
        log.info("Saving new favourite: {}", favourite.toString());
        return favouriteRepo.save(favourite);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting favourite: {}", id);
        favouriteRepo.deleteById(id);
        return TRUE;
    }

    @Override
    public Favourite get(Long id) {
        log.info("Fetching favourite by id: {}", id);
        return favouriteRepo.findById(id).get();
    }

    @Override
    public Collection<Favourite> getAllByUserId(Long userId) {
        log.info("Fetching all favourites by userId: {}", userId);
        return favouriteRepo.findAllByUserId(userId);
    }

    @Override
    public Optional<Favourite> findFavouriteByBouncyHouseAndUserId(Long bouncyHouseId, Long userId) {
        log.info("Find favourites by bouncyHouseId and userId: {}, {}", bouncyHouseId, userId);
        Optional<Favourite> favourite = favouriteRepo.findByBouncyHouseIdAndUserId(bouncyHouseId, userId);
        return favourite;
    }
}
