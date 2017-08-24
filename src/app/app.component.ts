import { Component } from '@angular/core';
import { CountService } from "./count.services";

@Component({
  selector: 'my-app', //tag to use in index html
  templateUrl: './componen.html', // here is template, its can be template url for you to create seperate html file
  styleUrls: ['./componenstyle.css']
})
export class AppComponent  { 
    constructor(private hasil: CountService){}
    a: number;
    b: number;
    result: number;
    onSubmit(): void {
        this.result = this.hasil.hitung(this.a, this.b);
    }
}
