package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.BouncyHouse;
import com.fhdwapp.appbackend.repo.BouncyHouseRepo;
import com.fhdwapp.appbackend.service.BouncyHouseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

import static java.lang.Boolean.*;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class BouncyHouseServiceImpl implements BouncyHouseService {

    private final BouncyHouseRepo bouncyHouseRepo;

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
        bouncyHouseRepo.deleteById(id);
        return TRUE;
    }
}
