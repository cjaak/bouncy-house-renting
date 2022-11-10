package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.Rating;
import com.fhdwapp.appbackend.repo.RatingRepo;
import com.fhdwapp.appbackend.service.RatingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class RatingServiceImpl implements RatingService {

    private final RatingRepo ratingRepo;
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
    public Rating getByRentedId(Long rentedId) {
        log.info("Fetching  rating by rentedId");
        return ratingRepo.findByRentedId(rentedId);
    }

    @Override
    public Rating get(Long id) {
        log.info("Fetching  rating");
        return ratingRepo.findById(id).get();
    }

    @Override
    public Rating create(Rating rating) {
        log.info("Creating rating");
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
