import { Component, OnInit } from '@angular/core';
import { WegotyouService } from 'src/app/service/wegotyou.service';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private service:WegotyouService, private router:Router) { }

  public isVisible: boolean = false;

  ngOnInit(): void {
  }

  onLogin(){

    this.service.login(this.loginForm.value).subscribe((response:any)=>{
      
      if(response === 'invalid login details' || response === 'enter username and password'){
        console.log(response)
        this.isVisible=true;
        setTimeout(()=>this.isVisible=false,1000)
        

      }else{
        console.log(response)

        //store data to local storage
        localStorage.setItem("token",JSON.stringify(response));
        this.router.navigate(['home'])
       
      }
     
    })

  }

}
