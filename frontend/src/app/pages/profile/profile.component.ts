import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/interface/user-details';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  //declaring variables 
  userDetails!: UserDetails[];
  localStorageData:any;
  value!:string
  user!:any;
  


  constructor() { }

  ngOnInit(): void {
      
  this.getUserID();
   
  }

  getUserID(){
    this.localStorageData = localStorage.getItem("token");
    this.value = JSON.parse(this.localStorageData)
    this.user = this.value
    this.userDetails = this.user;
    console.log(this.userDetails)
  }



}
