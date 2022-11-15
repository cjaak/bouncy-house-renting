import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './feature/home/home.module';
import { ProfileModule } from './feature/profile/profile.module';
import { CartModule } from './feature/cart/cart.module';
import { AuthModule } from './feature/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { BouncyHouseModule } from './feature/bouncy-house/bouncy-house.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RentingModule } from './feature/renting/renting.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    SharedModule,
    HomeModule,
    ProfileModule,
    CartModule,
    AuthModule,
    RentingModule,
    BouncyHouseModule,
    HttpClientModule,
    MatNativeDateModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
