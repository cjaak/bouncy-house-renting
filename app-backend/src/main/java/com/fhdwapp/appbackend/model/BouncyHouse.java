package com.fhdwapp.appbackend.model;

import com.fhdwapp.appbackend.enumeration.BouncyHouseSize;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.io.Serializable;
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
    private double pricePerDay;
    private BouncyHouseSize size;
    private String imageUrl;

}
