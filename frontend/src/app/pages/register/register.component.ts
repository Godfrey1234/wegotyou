import { Component, OnInit } from '@angular/core';
import { WegotyouService } from 'src/app/service/wegotyou.service';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';


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

  constructor(private service:WegotyouService) { }

  ngOnInit(): void {
  }

  onRegister(){

    console.log(this.RegisterForm.value)
    this.service.Register(this.RegisterForm.value).subscribe((res)=>{
      console.log(res)
    })
  }





}
