package com.fhdwapp.appbackend.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private Long userId;
    private Long bouncyHouseId;
    private Long rentedId;
    private int stars;
    @Column(columnDefinition="TEXT")
    @Lob
    private String comment;
}
