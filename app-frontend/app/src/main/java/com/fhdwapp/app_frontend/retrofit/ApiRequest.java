package com.fhdwapp.app_frontend.retrofit;

import com.fhdwapp.app_frontend.response.CustomResponse;

import retrofit2.Call;
import retrofit2.http.GET;

public interface ApiRequest {
    @GET("/bouncy-house/")
    Call<CustomResponse> getBouncyHouses();
}
