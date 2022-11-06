package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.repo.RentedRepo;
import com.fhdwapp.appbackend.service.RentedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Collection;

import static java.lang.Boolean.TRUE;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class RentedServiceImpl implements RentedService {

    private final RentedRepo rentedRepo;

    @Override
    public Rented create(Rented rented) {
        log.info("Saving new rented entry: {}", rented.getId());
        return rentedRepo.save(rented);
    }

    @Override
    public Collection<Rented> getAll() {
        log.info("Fetching all rented entries");
        return rentedRepo.findAll();
    }

    @Override
    public Collection<Rented> getAllByBouncyHouseId(Long bouncyHouseID) {
        log.info("Fetching all rented entries by house id");
        return rentedRepo.findAllByBouncyHouseId(bouncyHouseID);
    }

    @Override
    public Collection<Rented> getAllByUserId(Long userId) {
        log.info("Fetching all rented entries by user id");
        return rentedRepo.findAllByUserId(userId);
    }

    @Override
    public Rented get(Long id) {
        log.info("Fetching one rented entry by id: {}", id);
        return rentedRepo.findById(id).get();
    }

    @Override
    public Rented update(Rented rented) {
        log.info("Updating new rented entry: {}", rented.getId());
        return rentedRepo.save(rented);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting rented by id: {}", id);
        rentedRepo.deleteById(id);
        return TRUE;
    }

    @Override
    public Collection<Rented> getAllInUse() {
        log.info("Fetching rented objects in use");
        LocalDate now = LocalDate.now();
        return rentedRepo.findAllByStartDateLessThanEqualAndEndDateGreaterThanEqual(now, now);
    }

}
