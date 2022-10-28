package com.fhdwapp.app_frontend.response;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.time.LocalDateTime;
import java.util.Map;

public class CustomResponse {
    @SerializedName("timeStamp")
    @Expose
    protected String timeStamp;
    @SerializedName("statusCode")
    @Expose
    protected int statusCode;
    @SerializedName("status")
    @Expose
    protected String status;
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

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
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

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public Map<?, ?> getData() {
        return data;
    }

    public void setData(Map<?, ?> data) {
        this.data = data;
    }
}
