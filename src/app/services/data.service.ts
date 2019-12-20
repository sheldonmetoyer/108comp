import { User } from '../models/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  users : User[] = [];

  constructor() {
    var user = new User();
    user.userName = 'Admin';
    user.password = 'hellohello';
    user.firstName = 'Admin';
    user.lastName = 'User';

    this.users.push(user);
   }
    //create a defaultadmin user
    


  public sayHello(){
    console.log('Hello from a service');
  }


  public saveUser(theNewUser){
    //get a user and add it to the array
    this.users.push(theNewUser);

  }

  public getAllUsers(){
    // return all users
    return this.users;
  }
}
