import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:any;
  email:any;
  pswd:any;

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  registerForm = this.fb.group({//group
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  register():void{

    var name = this.registerForm.value.name;
    var email = this.registerForm.value.email;
    var pswd = this.registerForm.value.pswd;
    // var userDetails = this.ds.userDetails;

    const result = this.ds.register(name,email,pswd)
    if(this.registerForm.valid){
      if(result){
        alert("Registered Successfully");
        this.router.navigateByUrl('')
      }
      else{
        alert("Register Failure");
        console.log(this.registerForm.get('email')?.errors);
      }
    }
    
  }

}
