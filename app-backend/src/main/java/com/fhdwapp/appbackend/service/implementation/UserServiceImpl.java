package com.fhdwapp.appbackend.service.implementation;

import com.fhdwapp.appbackend.model.User;
import com.fhdwapp.appbackend.repo.UserRepo;
import com.fhdwapp.appbackend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.Optional;

import static java.lang.Boolean.*;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    @Override
    public User register(String email, String password) {
        log.info("Saving new user: {}", email);
        return null;
    }

    @Override
    public User create(User user) {
        log.info("Creating user: {}", user.getEmail());
        return userRepo.save(user);
    }

    @Override
    public Collection<User> getAll() {
        log.info("Fetching all Users");
        return userRepo.findAll();
    }

    @Override
    public Optional<Long> loginUser(String email, String password) {
        Optional<User> user = userRepo.findFirstByEmailAndPassword(email, password);
        return user.map(User::getId);
    }

    @Override
    public User get(Long id) {
        log.info("Fetching User by Id: {}", id);
        return userRepo.findById(id).get();
    }

    @Override
    public Boolean login(String email, String password) {
        log.info("{} tries to log in", email);
        return userRepo.findFirstByEmailAndPassword(email, password).isPresent();
    }

    @Override
    public User update(User user) {
        log.info("Updating User: {}", user.getEmail());
        return userRepo.save(user);
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting user by id: {}", id);
        userRepo.deleteById(id);
        return TRUE;
    }
}
