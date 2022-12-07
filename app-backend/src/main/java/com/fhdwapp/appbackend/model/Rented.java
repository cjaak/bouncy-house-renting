package com.fhdwapp.appbackend.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * Model, that represents a rented entry
 */
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Rented {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long userId;
    private Long bouncyHouseId;
    private LocalDate startDate;
    private LocalDate endDate;
    private Boolean rated = false;
}
