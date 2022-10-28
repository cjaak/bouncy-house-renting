package com.fhdwapp.app_frontend.adapter;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.fhdwapp.app_frontend.R;
import com.fhdwapp.app_frontend.model.BouncyHouse;
import com.fhdwapp.app_frontend.view.MainActivity;
import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

public class BouncyHouseAdapter extends RecyclerView.Adapter<BouncyHouseAdapter.ViewHolder> {

    private static final String TAG = MainActivity.class.getName();

    private Context context;
    ArrayList<BouncyHouse> bouncyHouseArrayList;

    public BouncyHouseAdapter(Context context, ArrayList<BouncyHouse> bouncyHouseArrayList) {
        this.context = context;
        this.bouncyHouseArrayList = bouncyHouseArrayList;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view= LayoutInflater.from(parent.getContext()).inflate(R.layout.list_each_row_bouncy_house, parent, false);
        return new ViewHolder(view);
    }

    //TODO: this should be refactored and use the BouncyHouse model instead of LinkedTreeMap
    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Object getrow = bouncyHouseArrayList.get(position);
        LinkedTreeMap<Object,Object> t = (LinkedTreeMap) getrow;
        holder.bhName.setText(t.get("name").toString());
        holder.bhTheme.setText(t.get("theme").toString());
        double price = (double)t.get("pricePerDay");
        holder.bhPrice.setText(String.format("%.2f €", price));
        Glide.with(context)
                .load(t.get("imageUrl"))
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
