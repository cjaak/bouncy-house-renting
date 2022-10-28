package com.fhdwapp.app_frontend.view;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

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
    private SwipeRefreshLayout swipeContainer;
    private BouncyHouseAdapter adapter;
    private ArrayList<BouncyHouse> bouncyHouseArrayList = new ArrayList<>();
    BouncyHouseViewModel bouncyHouseViewModel;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initialization();

        getBouncyHouses(false);

        swipeContainer = (SwipeRefreshLayout) findViewById(R.id.swipeContainer);
        // Setup refresh listener which triggers new data loading
        swipeContainer.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                adapter.clear();
                getBouncyHouses(true);
                swipeContainer.setRefreshing(false);
            }

        });

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
        bouncyHouseViewModel = new ViewModelProvider(this).get(BouncyHouseViewModel.class);
    }

    private void getBouncyHouses(boolean reload) {
        bouncyHouseViewModel.getBouncyHouseResponseLiveData(reload).observe(this, bouncyHouseResponse -> {
            progress_circular.setVisibility(View.GONE);
            List<BouncyHouse> bouncyHouses = (List<BouncyHouse>)bouncyHouseResponse.getData().get("bouncy_houses");
            bouncyHouseArrayList.addAll(bouncyHouses);
            adapter.notifyDataSetChanged();
        });
    }
}