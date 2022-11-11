package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.Rating;
import com.fhdwapp.appbackend.model.Rented;
import com.fhdwapp.appbackend.repo.RatingRepo;
import com.fhdwapp.appbackend.repo.RentedRepo;
import com.fhdwapp.appbackend.service.RatingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class RatingServiceImpl implements RatingService {

    private final RatingRepo ratingRepo;
    private final RentedRepo rentedRepo;
    @Override
    public Collection<Rating> getAll() {
        log.info("Fetching all ratings");
        return ratingRepo.findAll();
    }

    @Override
    public Collection<Rating> getAllByUserId(Long userId) {
        log.info("Fetching all ratings by userId");
        return ratingRepo.findAllByUserId(userId);
    }

    @Override
    public Collection<Rating> getAllByBouncyHouseId(Long bouncyHouseId) {
        log.info("Fetching all ratings by bouncyHouseId");
        return ratingRepo.findAllByBouncyHouseId(bouncyHouseId);
    }

    @Override
    public Optional<Rating> getByRentedId(Long rentedId) {
        log.info("Fetching  rating by rentedId");
        if(ratingRepo.findByRentedId(rentedId).isPresent()){
            return Optional.of(ratingRepo.findByRentedId(rentedId).get());
        }
        return Optional.empty();
    }

    @Override
    public Optional<Rating> get(Long id) {
        log.info("Fetching  rating");
        if(rentedRepo.findById(id).isPresent()){
            return Optional.of(ratingRepo.findById(id).get());
        }
        return Optional.empty();
    }

    @Override
    public Rating create(Rating rating) {
        log.info("Creating rating");
        Rented entry = rentedRepo.findById(rating.getRentedId()).get();
        entry.setRated(true);
        rentedRepo.save(entry);
        return ratingRepo.save(rating);
    }

    @Override
    public Rating update(Rating rating) {
        log.info("Updating rating");
        return ratingRepo.save(rating);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting rating");
        ratingRepo.deleteById(id);
        return true;
    }
}
