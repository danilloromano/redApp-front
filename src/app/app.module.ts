import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { routing } from './app.routs';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { VideoService } from './videos/video.service';

import {
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSortModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,

} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
