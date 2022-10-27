package com.fhdwapp.app_frontend.view_model;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.fhdwapp.app_frontend.repository.BouncyHouseRepo;
import com.fhdwapp.app_frontend.response.CustomResponse;

public class BouncyHouseViewModel extends AndroidViewModel {

    private BouncyHouseRepo bouncyHouseRepo;
    private LiveData<CustomResponse> bouncyHouseResponseLiveData;

    public BouncyHouseViewModel(@NonNull Application application) {
        super(application);

        bouncyHouseRepo = new BouncyHouseRepo();
        this.bouncyHouseResponseLiveData = bouncyHouseRepo.getBouncyHouses();
    }

    public LiveData<CustomResponse> getBouncyHouseResponseLiveData() {
        return bouncyHouseResponseLiveData;
    }
}
