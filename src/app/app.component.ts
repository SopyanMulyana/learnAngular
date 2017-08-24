import { Component } from '@angular/core';

@Component({
  selector: 'my-app', //tag to use in index html
  templateUrl: './componen.html', // here is template, its can be template url for you to create seperate html file
  styleUrls: ['./componenstyle.css']
})
export class AppComponent  { 
  show: boolean = true;

  persons: any[] = [
    {
      ID: 1,
      name: 'Sopyan Mulyana',
      email: 'sopyan.mulyana@mitrais.com',
      age: 23
    },
    {
      ID: 2,
      name: 'Daniel Muliawan',
      email: 'daniel.muliawan@mitrais.com',
      age: 33
    },
    {
      ID: 3,
      name: 'Wisesa Fentika',
      email: 'wisessa.fentika@mitrais.com',
      age: 31
    }
  ]
}
