package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.BouncyHouse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

/**
 * Interface of hibernate for bouncy house
 */
public interface BouncyHouseRepo extends JpaRepository<BouncyHouse, Long> {

    /**
     * deletes specific bouncy house by id
     * @param id bouncy house id
     */
    void deleteById(Long id);

    /**
     * retrieves all bouncy houses with their visibility set to true
     * @return Collection of bouncy houses
     */
    Collection<BouncyHouse> findAllByVisibleTrue();

}
