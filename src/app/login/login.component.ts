import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  pswd:any;

  constructor(private router:Router,private ds :DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({//group
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  login(){
    var email= this.loginForm.value.email;
    var pswd = this.loginForm.value.pswd;
    // var userDetails = this.ds.userDetails;
  
  
     const result = this.ds.login(email,pswd)
     if(this.loginForm.valid){
      if(result){
        alert("Login Successful");
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert("Login Failure");
        console.log(this.loginForm.get('email')?.errors);
      }
     }   
  }
}
