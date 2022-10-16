package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.BouncyHouse;

import java.util.Collection;

public interface BouncyHouseService {
    BouncyHouse create(BouncyHouse house);
    Collection<BouncyHouse> getAll();
    BouncyHouse get(Long id);
    BouncyHouse update(BouncyHouse house);
    Boolean delete(Long id);
}
