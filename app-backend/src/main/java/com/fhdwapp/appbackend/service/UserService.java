package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.User;

import java.util.Collection;
import java.util.Optional;

public interface UserService {
    User register(String email, String password);
    Optional<User> create(User user);

    Collection<User> getAll();

    Optional<Long> loginUser(String email, String password);
    User get(Long id);
    Boolean login(String email, String password);
    User update(User user);
    Boolean delete(Long id);
}
