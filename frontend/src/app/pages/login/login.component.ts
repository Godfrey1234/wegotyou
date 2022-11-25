import { Component, OnInit } from '@angular/core';
import { WegotyouService } from 'src/app/service/wegotyou.service';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   //declaring form group
   loginForm = new FormGroup({
      
    email :new FormControl(''),
    password :new FormControl('')
     
    
  });

  constructor(private service:WegotyouService) { }

  ngOnInit(): void {
  }

  onLogin(){

    this.service.login(this.loginForm.value).subscribe((response)=>{
      console.log(response)
    })

  }

}
