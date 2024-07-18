import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
@Pipe({name: 'capitalize'})
export class AboutComponent implements OnInit{
name:string="Iphone";
cost:number=60000;
category:string="electronics";
today:number=Date.now();
pi: number = 3.14;
      e: number = 2.718281828459045;
      str: string = 'abcdefghij';
constructor() {  }  
ngOnInit() {
}
}
// transform(value: string, args: string[]): any {
//   if (!value) return value;

//   return value.replace(/\w\S*/g, function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();

      


//   }

// 
// greeting:Promise<string>|null = null;
// arrived: boolean = false;
 
  // reset() {
  //   this.arrived = false;
  //   this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  // }
 
  // clicked() {
  //   if (this.arrived) {
  //     this.reset();
  //   } else {
  //     this.resolve !('hi there!');
  //     this.arrived = true;
  //   }
  

