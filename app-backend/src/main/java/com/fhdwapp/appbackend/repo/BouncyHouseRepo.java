package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.BouncyHouse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface BouncyHouseRepo extends JpaRepository<BouncyHouse, Long> {

    void deleteById(Long id);

    Collection<BouncyHouse> findAllByIsVisibleTrue();

}
