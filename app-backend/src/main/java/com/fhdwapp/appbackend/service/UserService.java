package com.fhdwapp.appbackend.service;

import com.fhdwapp.appbackend.model.User;

import java.util.Collection;

public interface UserService {
    User register(String email, String password);
    Collection<User> getAll();
    User get(Long id);
    Boolean login(String email, String password);
    User update(User user);
    Boolean delete(Long id);
}
