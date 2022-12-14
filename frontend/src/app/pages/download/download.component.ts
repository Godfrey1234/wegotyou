import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/interface/user-details';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() { }


  //declaring variables 

  localStorageData:any;



  ngOnInit(): void {
      
  this.getUserID();
   
  }

  getUserID(){
    this.localStorageData = localStorage.getItem("img");
    
  }

}
