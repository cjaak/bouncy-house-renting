package com.fhdwapp.app_frontend.enumeration;

public enum BouncyHouseSize {
    S("S"),
    M("M"),
    L("L"),
    XL("XL");

    private final String bouncyHouseSize;

    BouncyHouseSize(String size) {
        this.bouncyHouseSize = size;
    }

    public String getBouncyHouseSize() {
        return this.bouncyHouseSize;
    }
}
