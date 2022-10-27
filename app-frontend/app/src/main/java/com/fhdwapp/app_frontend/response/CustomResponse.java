package com.fhdwapp.app_frontend.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.time.LocalDateTime;
import java.util.Map;

public class CustomResponse {
    @SerializedName("timeStamp")
    @Expose
    protected LocalDateTime timeStamp;
    @SerializedName("status")
    @Expose
    protected int status;
    @SerializedName("reason")
    @Expose
    protected String reason;
    @SerializedName("message")
    @Expose
    protected String message;
    @SerializedName("developerMessage")
    @Expose
    protected String developerMessage;
    @SerializedName("data")
    @Expose
    protected Map<?, ?> data;

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getDeveloperMessage() {
        return developerMessage;
    }

    public void setDeveloperMessage(String developerMessage) {
        this.developerMessage = developerMessage;
    }

    public Map<?, ?> getData() {
        return data;
    }

    public void setData(Map<?, ?> data) {
        this.data = data;
    }
}
