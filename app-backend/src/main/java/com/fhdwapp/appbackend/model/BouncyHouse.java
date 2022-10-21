package com.fhdwapp.appbackend.model;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import com.fhdwapp.appbackend.enumeration.BouncyHouseTheme;

import lombok.*;


import javax.persistence.*;
import java.io.Serializable;


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
    private String description;
    private BouncyHouseTheme theme;
    private BouncyHouseSize size;
    private double weightLimit;
    private Integer constructionTimeInMinutes;
    private double pricePerDay;
    private boolean withPowerConnection;
    private String imageUrl;

}
