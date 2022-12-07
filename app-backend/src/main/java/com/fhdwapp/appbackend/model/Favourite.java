package com.fhdwapp.appbackend.model;

import lombok.*;

import javax.persistence.*;

/**
 * Model to represent the favourite relationship between a bouncy house and an user
 */
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Favourite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long userId;
    private Long bouncyHouseId;
}
