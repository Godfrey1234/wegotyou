import { Component, OnInit } from '@angular/core';
import { WegotyouService } from 'src/app/service/wegotyou.service';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //declaring form group
  RegisterForm = new FormGroup({
      
    email :new FormControl(''),
    name :new FormControl(''),
    password :new FormControl(''),
    confirm :new FormControl(''),
     
    
  });
  
  public isVisible: boolean = false;
  public isVisible2: boolean = false;

  constructor(private service:WegotyouService,private router:Router) { }

  ngOnInit(): void {

  
  }

  onRegister(data:any){

    console.log(this.RegisterForm.value)
    this.service.Register(this.RegisterForm.value).subscribe((response)=>{
     if(response === 'password dont match'){
        console.log(response)
        this.isVisible=true;
        setTimeout(()=>this.isVisible=false,1000)

      }else if(response === 'user already exists'){
        console.log(response)
        this.isVisible2=true;
        setTimeout(()=>this.isVisible2=false,1000)
       
      }else{

        console.log(response)
        this.router.navigate(['login'])
      }
    })
  }





}
