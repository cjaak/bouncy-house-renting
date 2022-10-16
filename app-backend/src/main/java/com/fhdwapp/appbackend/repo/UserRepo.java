package com.fhdwapp.appbackend.repo;

import com.fhdwapp.appbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
    void deleteById(Long id);
}
