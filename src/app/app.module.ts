import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //import a forms module

import { AppComponent }  from './app.component';
import { CountService } from "./count.services";

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //add a forms module
  declarations: [ AppComponent ], 
  bootstrap:    [ AppComponent ],
  providers: [CountService], // add profider for count services
})
export class AppModule { }
