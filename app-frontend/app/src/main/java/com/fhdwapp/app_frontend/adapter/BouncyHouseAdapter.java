package com.fhdwapp.app_frontend.adapter;

import android.content.Context;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.fhdwapp.app_frontend.R;
import com.fhdwapp.app_frontend.model.BouncyHouse;

import java.util.ArrayList;

public class BouncyHouseAdapter extends RecyclerView.Adapter<BouncyHouseAdapter.ViewHolder> {

    private Context context;
    ArrayList<BouncyHouse> bouncyHouseArrayList;

    public BouncyHouseAdapter(Context context, ArrayList<BouncyHouse> bouncyHouseArrayList) {
        this.context = context;
        this.bouncyHouseArrayList = bouncyHouseArrayList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        BouncyHouse bouncyHouse = bouncyHouseArrayList.get(position);
        holder.bhName.setText(bouncyHouse.getName());
        holder.bhTheme.setText(bouncyHouse.getTheme().toString());
        holder.bhPrice.setText(String.valueOf(bouncyHouse.getPricePerDay()));
        Glide.with(context)
                .load(bouncyHouse.getImageUrl())
                .into(holder.imgViewCover);


    }

    @Override
    public int getItemCount() {
        return bouncyHouseArrayList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        private final ImageView imgViewCover;
        private final TextView bhName;
        private final TextView bhTheme;
        private final TextView bhPrice;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            imgViewCover=(ImageView) itemView.findViewById(R.id.imgViewCover);
            bhName=(TextView) itemView.findViewById(R.id.bhName);
            bhTheme=(TextView) itemView.findViewById(R.id.bhTheme);
            bhPrice=(TextView) itemView.findViewById(R.id.bhPrice);

        }
    }
}
