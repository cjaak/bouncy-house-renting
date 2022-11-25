package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.model.Favourite;
import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.repo.BouncyHouseRepo;
import com.fhdwapp.appbackend.repo.FavouriteRepo;
import com.fhdwapp.appbackend.repo.RentedRepo;
import com.fhdwapp.appbackend.service.BouncyHouseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.*;

import static java.lang.Boolean.*;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class BouncyHouseServiceImpl implements BouncyHouseService {

    private final BouncyHouseRepo bouncyHouseRepo;
    private final RentedRepo rentedRepo;

    private final FavouriteRepo favouriteRepo;

    @Override
    public BouncyHouse create(BouncyHouse house) {
        log.info("Saving new bouncy house: {}", house.getName());
        return bouncyHouseRepo.save(house);
    }

    @Override
    public Collection<BouncyHouse> getAll() {
        log.info("Fetching all bouncy houses");
        return bouncyHouseRepo.findAll();
    }

    @Override
    public Collection<BouncyHouse> getAllByFavouriteByUserId(Long userId) {
        List<BouncyHouse> bouncyHouses = new ArrayList<BouncyHouse>();
        Collection<Favourite> favourites = favouriteRepo.findAllByUserId(userId);
        for (Favourite favourite : favourites) {
            Optional<BouncyHouse> house = bouncyHouseRepo.findById(favourite.getBouncyHouseId());
            house.ifPresent(bouncyHouses::add);
        }
        return bouncyHouses;
    }

    @Override
    public Collection<BouncyHouse> getAllVisible() {
        log.info("Fetching all visible bouncy houses");
        return bouncyHouseRepo.findAllByIsVisibleTrue();
    }


    @Override
    public BouncyHouse get(Long id) {
        log.info("Fetching bouncy house by id: {}", id);
        return bouncyHouseRepo.findById(id).get();
    }

    @Override
    public BouncyHouse update(BouncyHouse house) {
        log.info("Updating bouncy house: {}", house.getName());
        return bouncyHouseRepo.save(house);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting bouncy house: {}", id);
        if (rentedRepo.findTopByBouncyHouseIdAndEndDateAfter(id, LocalDate.now()).isPresent() || get(id).isVisible()) {
            log.info("Not deleting because bouncy house is in use");
            return FALSE;
        }
        bouncyHouseRepo.deleteById(id);
        return TRUE;
    }
}
