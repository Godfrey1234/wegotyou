import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { WegotyouService } from 'src/app/service/wegotyou.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {



    //declaring form group
    queryForm = new FormGroup({
      
      email :new FormControl(''),
      message :new FormControl('')
       
      
    });

    public isVisible: boolean = false;
  constructor(private service:WegotyouService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    

    this.service.query(this.queryForm.value).subscribe((response:any)=>{
      
      if(response === 'invalid login details' || response === 'enter username and password'){
        console.log(response)
        this.isVisible=true;
        setTimeout(()=>this.isVisible=false,1000)
        

      }else{
        console.log(response)

        //store data to local storage
        localStorage.setItem("token",JSON.stringify(response));
       
       
      }
     
    })

  }





  }


