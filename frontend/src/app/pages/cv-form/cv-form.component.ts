import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  @ViewChild('htmlData') htmlData!: ElementRef;  // view child is specifying the content that the pdf will hold

 

 //declaring cv variables

  name:any;
  surname:any;
  contact:any;
  email:any;

  pdf:any;

  text:any;

  streetName:any;
  StreetNumber: any;
  city:any;
  code:any;

  institution:any;
  qualification:any;
  year:any;


  wyear:any;


  companyName:any;
  position:any;
  cyear:any;

  contactPerson:any;
  rPosition:any;
  tel:any;






  public openPDF(): void { // function declared on the buttun
   
    
   
   
    let DATA: any = document.getElementById('htmlData'); // pdf file data

 

    html2canvas(DATA).then((canvas) => {
      
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('cv.pdf');
     this.pdf =  FILEURI; // can add to database
     console.log(FILEURI)
    });
    
  }




  constructor() { }

  ngOnInit(): void {
    
  }

  

}
