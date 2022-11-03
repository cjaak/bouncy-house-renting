package com.fhdwapp.app_frontend.retrofit;

import com.fhdwapp.app_frontend.response.CustomResponse;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ApiRequest {
    @GET("/bouncy-house/")
    Call<CustomResponse> getBouncyHouses();

    @GET("/user/login")
    Call<CustomResponse> login(@Body String email, @Body String password);

}
