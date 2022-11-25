package com.fhdwapp.appbackend.enumeration;

public enum BouncyHouseTheme {

    Tier("Tier"),
    Cowboy("Cowboy"),
    Ritter("Ritter"),
    Prinzessin("Prinzessin"),
    Zug("Zug"),
    Einhorn("Einhorn");


    private final String bouncyHouseTheme;

    BouncyHouseTheme(String theme) {
        this.bouncyHouseTheme = theme;
    }

    public String getBouncyHouseSize() {
        return this.bouncyHouseTheme;
    }
}
