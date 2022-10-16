package com.fhdwapp.appbackend.model;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import com.fhdwapp.appbackend.enumeration.BouncyHouseTheme;
import jdk.jfr.Timespan;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Period;
import java.util.Objects;

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
    private BouncyHouseTheme theme;
    private BouncyHouseSize size;
    private double weightLimit;
    private Integer constructionTimeInMinutes;
    private double pricePerDay;
    private boolean WithPowerConnection;
    private String imageUrl;

}
