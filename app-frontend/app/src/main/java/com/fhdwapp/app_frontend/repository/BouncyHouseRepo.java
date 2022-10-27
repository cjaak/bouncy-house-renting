package com.fhdwapp.app_frontend.repository;

import android.util.Log;

import androidx.lifecycle.LiveData;
import androidx.lifecycle.MutableLiveData;

import com.fhdwapp.app_frontend.response.CustomResponse;
import com.fhdwapp.app_frontend.retrofit.ApiRequest;
import com.fhdwapp.app_frontend.retrofit.RetrofitRequest;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class BouncyHouseRepo {
    private static final String TAG = ArticleRepository.class.getSimpleName();
    private ApiRequest apiRequest;

    public BouncyHouseRepo() {
        apiRequest = RetrofitRequest.getRetrofitInstance().create(ApiRequest.class);
    }

    public LiveData<CustomResponse> getBouncyHouses() {
        final MutableLiveData<CustomResponse> data = new MutableLiveData<>();
        apiRequest.getBouncyHouses()
                .enqueue(new Callback<CustomResponse>() {
                    @Override
                    public void onResponse(Call<CustomResponse> call, Response<CustomResponse> response) {
                        Log.d(TAG, "onResponse response:: " + response);

                        if(response.body() != null) {
                            data.setValue(response.body());

                            Log.d(TAG, "message:: " + response.body().getMessage());
                            Log.d(TAG, "data:: " + response.body().getData());
                        }
                    }

                    @Override
                    public void onFailure(Call<CustomResponse> call, Throwable t) {
                        data.setValue(null);
                    }
                });
        return data;
    }
}
