package com.fhdwapp.app_frontend.view_model;

import android.app.Application;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.fhdwapp.app_frontend.repository.BouncyHouseRepo;
import com.fhdwapp.app_frontend.response.CustomResponse;
import com.fhdwapp.app_frontend.view.MainActivity;

public class BouncyHouseViewModel extends AndroidViewModel {
    private static final String TAG = MainActivity.class.getName();
    private BouncyHouseRepo bouncyHouseRepo;
    private LiveData<CustomResponse> bouncyHouseResponseLiveData;

    public BouncyHouseViewModel(@NonNull Application application) {
        super(application);

        bouncyHouseRepo = new BouncyHouseRepo();
        this.bouncyHouseResponseLiveData = bouncyHouseRepo.getBouncyHouses();
    }

    public LiveData<CustomResponse> getBouncyHouseResponseLiveData() {
        Log.d(TAG, "Live Data :: " + bouncyHouseResponseLiveData.getValue());
        return bouncyHouseResponseLiveData;
    }
}
