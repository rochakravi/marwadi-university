import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { BtechComponent } from './components/btech/btech.component';
import { C2021Component } from './components/btech/c2021/c2021.component';
import { MbaComponent } from './components/mba/mba.component';
import { McaComponent } from './components/mca/mca.component';
import { C2020Component } from './components/btech/c2020/c2020.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent,
    MobilesComponent,
    BtechComponent,
    C2021Component,
    MbaComponent,
    McaComponent,
    C2020Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
