import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AppNavsComponent } from './app-navs/app-navs.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AppNavsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
