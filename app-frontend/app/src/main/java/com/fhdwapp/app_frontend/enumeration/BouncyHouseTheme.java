package com.fhdwapp.app_frontend.enumeration;

public enum BouncyHouseTheme {
    Animal("Animal"),
    Cowboy("Cowboy"),
    Knight("Knight"),
    Princess("Princess"),
    Train("Train"),
    Unicorn("Unicorn");


    private final String bouncyHouseTheme;

    BouncyHouseTheme(String theme) {
        this.bouncyHouseTheme = theme;
    }

    public String getBouncyHouseSize() {
        return this.bouncyHouseTheme;
    }
}
