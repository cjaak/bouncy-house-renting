package com.fhdwapp.app_frontend.model;

import com.fhdwapp.app_frontend.enumeration.BouncyHouseSize;
import com.fhdwapp.app_frontend.enumeration.BouncyHouseTheme;

public class BouncyHouse {
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
    private boolean isVisible;
}
