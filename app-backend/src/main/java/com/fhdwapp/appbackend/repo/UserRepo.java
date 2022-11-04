package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    void deleteById(Long id);

    Optional<User> findFirstByEmailAndPassword(String email, String password);
    Optional<User> findByEmail(String email);
}
