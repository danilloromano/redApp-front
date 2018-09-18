import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideosComponent } from './videos/videos.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
