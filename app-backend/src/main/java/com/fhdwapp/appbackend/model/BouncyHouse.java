package com.fhdwapp.appbackend.model;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import com.fhdwapp.appbackend.enumeration.BouncyHouseTheme;

import lombok.*;


import javax.persistence.*;
import java.io.Serializable;

/**
 * Model, to represent a bouncy house
 */
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class BouncyHouse implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    @Column(columnDefinition="TEXT")
    @Lob
    private String description;
    private BouncyHouseTheme theme;
    private BouncyHouseSize size;
    private double weightLimit;
    private Integer constructionTimeInMinutes;
    private double pricePerDay;
    private boolean withPowerConnection;
    private String imageUrl;
    private boolean visible;

}
