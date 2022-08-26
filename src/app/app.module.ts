import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {GetDataService} from "./services/spaceX/get-data.service";
import {HttpClientModule} from "@angular/common/http";
import {ContactService} from "./services/Contact/contact.service";


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy },
    GetDataService,
    ContactService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
