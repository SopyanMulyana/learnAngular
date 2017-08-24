import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './profilecomponent';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,
                 ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
