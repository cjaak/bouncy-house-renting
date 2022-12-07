package com.fhdwapp.appbackend.enumeration;

/**
 * Enum that consists of the sizes a bouncy house ca have
 */
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
