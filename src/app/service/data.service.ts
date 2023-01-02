import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any;
  currentPswd:any;

  userDetails: any = {
    "sasi@gmail.com": { name:"Sasi", email:"sasi@gmail.com",password:"111" },
    "athul@gmail.com": {name:"Athul", email:"athul@gmail.com",password:"222" },
    "arjun@gmail.com": {name:"Arjun", email:"arjun@gmail.com",password:"333" },
    "ajay@gmail.com": { name:"Ajay", email:"ajay@gmail.com",password:"444" },
  }

  constructor() { }

  register(name: any, email: any, password: any) {

    var userDetails = this.userDetails;
    if (email in this.userDetails) {
      return false;
    }
    else {
      userDetails[email] = {
        name: name,
        email: email,
        password: password
      }
      // this.saveDetails();
      return true
    }

  }


  login(email: any, password: any) {
    var userDetails = this.userDetails;
    if (email in this.userDetails) {
      if (password == this.userDetails[email].password) {
        this.currentUser = userDetails[email].email;
        this.currentPswd =  userDetails[email].password;
        return true;
      }
      else {
        alert("Invalid Password");
        return false;
      }
    }
    else {
      alert("Invalid user details");
      return false;
    }

  }
}
