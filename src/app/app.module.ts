import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {HttpClientModule} from '@angular/common/http';
import { SamComponent } from './sam/sam.component';
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
