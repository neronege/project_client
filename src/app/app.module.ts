import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { FormsModule } from '@angular/forms';
import { UpdateHomeComponent } from './update/update-home/update-home.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateHomeComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UpdateHomeComponent
  
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
