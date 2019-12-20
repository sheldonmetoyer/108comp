import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { DataService } from '../services/data.service';

import { Router } from '@angular/router'
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{

  userList : User[] = [];

  userName : string = '';
  password : string = '';

  userNameError = false;
  passwordError = false;
  loginFailed = false;

  constructor(private data : DataService, private router: Router, private shared: SharedService) {
    this.userList = data.getAllUsers();
   }

  userChanged(){
    if(this.userName) this.userNameError = false;
  }

  passwordChanged(){
    if(this.password) this.passwordError = false;
  }

  login(){

    // validate for username and password not empty

    var missingInfo = false;
    if(!this.userName){
      missingInfo=true;
      this.userNameError = true;
    }

    if(!this.password){
      missingInfo = true;
      this.passwordError = true;
    }

    if (missingInfo) return;

    //compare username and password
    //with those of the userList[]

    /**
     * travel the userList array
     * get each element from the array
     * compare the userName and password with those of the element
     * if they match, send the user to register page,
     * hide the login button
     * else show login error
    */

    var credsCorrect = false;

    for(var i=0; i<this.userList.length; i++){
      var user = this.userList[i];

      if(user.userName == this.userName && user.password == this.password){
        console.log("Logged in correctly");
        credsCorrect = true;
        this.loginFailed = false;
        this.shared.isUserLoggedIn = true;

        //send the user to register page
        this.router.navigate(['home']);

      }
    }

    if(!credsCorrect) { 
      console.log("incorrect data");
      this.loginFailed = true;
    }


  }




}
