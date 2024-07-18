import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup;
  constructor() { 
    this.myForm=new FormGroup({
username:new FormControl('',[Validators.required]),
password:new FormControl('',[Validators.required,
Validators.minLength(5),
Validators.maxLength(8)])

    });
  }

  onSubmit(myForm){
    alert("Submiteed succerssfully")
  }

  ngOnInit() {
  }

}
