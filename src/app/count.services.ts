import { Injectable } from '@angular/core'; 
 
 @Injectable() 
 export class CountService {  
    hitung(a: number,b: number): number { 
       return (a*b); 
    } 
 }