package com.fhdwapp.app_frontend.view;

import android.os.Bundle;
import android.util.Log;
import android.widget.ProgressBar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import com.fhdwapp.app_frontend.R;
import com.fhdwapp.app_frontend.adapter.BouncyHouseAdapter;
import com.fhdwapp.app_frontend.model.BouncyHouse;
import com.fhdwapp.app_frontend.view_model.BouncyHouseViewModel;

import java.util.ArrayList;

public class AnmeldemaskeNutzer extends AppCompatActivity
{
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.anmeldemaske_nutzerkonto);
    }
}
