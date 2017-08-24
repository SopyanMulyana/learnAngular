import { Component } from '@angular/core';

@Component({
  selector: 'my-profile', //tag to use in index html
  templateUrl: './profilecomponent.html', // here is template, its can be template url for you to create seperate html file
  styleUrls: ['./componenstyle.css']
})
export class ProfileComponent  { 
  name: string = 'Sopyan Mulyana';
  email: string = 'sopyan.mulyana@mitrais.com';

  showMyProfile(): void {
    alert(this.name);
  };
 }