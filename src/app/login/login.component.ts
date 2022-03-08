import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ValidationErrors } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import { Router } from '@angular/router';
import{AlphanumDirective} from '../alphanum.directive'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  frm = new FormGroup({
    uname :new FormControl(''),
    pwd :new FormControl('',[Validators.required,Validators.minLength(10)]),

  })

  constructor(public loginsrvc:AuthService, public rtr :Router) { }

  ngOnInit(): void {
  }
  CheckUser(){
    var res =this. loginsrvc.ValidateUser(this.frm.value["uname"],this.frm.value["pwd"]);
    if (res)
    {
      this.rtr.navigate(["navigate"])
  }
  else{
    alert("InvalidUser... ");
  }

}

}


