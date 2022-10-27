package com.fhdwapp.app_frontend.retrofit;

import static com.fhdwapp.app_frontend.constants.AppConstant.BASE_URL;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitRequest {
    private static Retrofit retrofit;


    public static Retrofit getRetrofitInstance() {
        if (retrofit == null) {
            retrofit = new retrofit2.Retrofit.Builder()
                    .baseUrl(BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create())
                    .build();
        }
        return retrofit;
    }
}
