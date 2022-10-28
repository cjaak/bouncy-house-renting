package com.fhdwapp.app_frontend.view;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ProgressBar;

import com.fhdwapp.app_frontend.R;
import com.fhdwapp.app_frontend.adapter.BouncyHouseAdapter;
import com.fhdwapp.app_frontend.model.BouncyHouse;
import com.fhdwapp.app_frontend.view_model.BouncyHouseViewModel;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getName();
    private RecyclerView my_recycler_view;
    private ProgressBar progress_circular;
    private LinearLayoutManager layoutManager;
    private BouncyHouseAdapter adapter;
    private ArrayList<BouncyHouse> bouncyHouseArrayList = new ArrayList<>();
    BouncyHouseViewModel bouncyHouseViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initialization();

        getBouncyHouses();

    }

    private void initialization() {
        Log.d(TAG, "Starting initialization");
        progress_circular = (ProgressBar) findViewById(R.id.progress_circular);
        my_recycler_view = (RecyclerView) findViewById(R.id.my_recycler_view);

        // use a linear layout manager
        layoutManager = new LinearLayoutManager(MainActivity.this);
        my_recycler_view.setLayoutManager(layoutManager);

        // use this setting to improve performance if you know that changes
        // in content do not change the layout size of the RecyclerView
        my_recycler_view.setHasFixedSize(true);

        // adapter
        adapter = new BouncyHouseAdapter(MainActivity.this, bouncyHouseArrayList);
        my_recycler_view.setAdapter(adapter);

        // View Model
        bouncyHouseViewModel = ViewModelProviders.of(this).get(BouncyHouseViewModel.class);
    }

    private void getBouncyHouses() {
        bouncyHouseViewModel.getBouncyHouseResponseLiveData().observe(this, bouncyHouseResponse -> {
            Log.d(TAG, "Called Observable response :: " + bouncyHouseResponse);
            if(bouncyHouseResponse != null) {
                progress_circular.setVisibility(View.GONE);
                List<BouncyHouse> bouncyHouses = (List<BouncyHouse>)bouncyHouseResponse.getData().get("bouncy_houses");
                bouncyHouseArrayList.addAll(bouncyHouses);
                Log.d(TAG, "DATA :: " + bouncyHouses);
                adapter.notifyDataSetChanged();
            }
        });
    }
}