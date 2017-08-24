import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //import a forms module

import { AppComponent }  from './app.component';
import { ProfileFormComponent }  from './profile-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //add a forms module
  declarations: [ AppComponent,
                 ProfileFormComponent ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
