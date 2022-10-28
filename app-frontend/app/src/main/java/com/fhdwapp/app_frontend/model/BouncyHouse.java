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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BouncyHouseTheme getTheme() {
        return theme;
    }

    public void setTheme(BouncyHouseTheme theme) {
        this.theme = theme;
    }

    public BouncyHouseSize getSize() {
        return size;
    }

    public void setSize(BouncyHouseSize size) {
        this.size = size;
    }

    public double getWeightLimit() {
        return weightLimit;
    }

    public void setWeightLimit(double weightLimit) {
        this.weightLimit = weightLimit;
    }

    public Integer getConstructionTimeInMinutes() {
        return constructionTimeInMinutes;
    }

    public void setConstructionTimeInMinutes(Integer constructionTimeInMinutes) {
        this.constructionTimeInMinutes = constructionTimeInMinutes;
    }

    public double getPricePerDay() {
        return pricePerDay;
    }

    public void setPricePerDay(double pricePerDay) {
        this.pricePerDay = pricePerDay;
    }

    public boolean isWithPowerConnection() {
        return withPowerConnection;
    }

    public void setWithPowerConnection(boolean withPowerConnection) {
        this.withPowerConnection = withPowerConnection;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public boolean isVisible() {
        return isVisible;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }




}
