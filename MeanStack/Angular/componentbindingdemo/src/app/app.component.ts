import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { Employee } from './models/employee.model';
import { LogService } from './services/log.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count:number=1;
id:number=1;
name:string="Iphone";
cost:number=60000;
high:boolean=true;
nor:boolean=true;
color:string="red";
fontSize:string="30px";
toggle:boolean;
toggle1:boolean;
participantnames:string[]=[];


constructor(private logService:LogService,private dataService:DataService){
  this.toggle=false;
}

callLogService(){
  this.logService.LogMessage('Piyu');
}

getNamesFromService(){
  this.participantnames=this.dataService.getNames();
}

ngOnInit()
{
  this.getNamesFromService();
}


addNameToService(name)
{
  this.dataService.addName(name);
}

deleteNameFromService(name)
{
  this.dataService.deleteName(name)l
}
onChangeStyle()
{
  this.high=!this.high;
  this.nor=!this.nor;
}
product:Product={
  id:2,
name:"Iphone",
cost:60000,
category:"electronics"
}


employee:Employee={
  
    id:3,
name:"Prinyaka",
address:"OMKAR",
salary:700000,
designation:"AC",
mob_no:9045497645,
deptid:224,
deptLoc:"talawde",

}

clickMe()
{
  alert('You clicked me! ^_^');
}


// constructor(){
//   this.toggle=false
// }
onToggle()
{
  this.toggle=!this.toggle;
}

getProductById(id:number){
  alert('You passed:'+id);
}



products:Product[]=[
  {id:1,name:"Iphone",cost:60000,category:"Electronics"},
  {id:2,name:"Note8",cost:60000,category:"Electronics"},
  {id:3,name:"Redmi",cost:60000,category:"Electronics"},
];

constructor1(){
  this.toggle1=false
}
onToggle1()
{
  this.toggle1=!this.toggle1;
}

emps:Employee[]=[
  {id:1,name:"Iphone",address:"Pune",designation:"AC",deptid:1,deptLoc:"MaP",salary:46376,mob_no:95477256},
  {id:2,name:"Iphone",address:"Pune",designation:"AC",deptid:1,deptLoc:"MaP",salary:46376,mob_no:95477256},
  {id:3,name:"Iphone",address:"Pune",designation:"AC",deptid:1,deptLoc:"MaP",salary:46376,mob_no:95477256},
];



}


