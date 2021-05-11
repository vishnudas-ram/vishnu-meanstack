import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../shared/myservice.service';
import { NgForm } from '@angular/forms';
import {Mymodel} from '../shared/mymodel.model';


@Component({
  selector: 'app-bookproduct',
  templateUrl: './bookproduct.component.html',
  styleUrls: ['./bookproduct.component.css'],
  providers:[MyserviceService]
})
export class BookproductComponent implements OnInit {

  constructor(public myserv:MyserviceService) { }

  ngOnInit(): void {
    this.resetTable();
  }

  resetTable(form?:NgForm){
    if(form)
    form.reset()
    this.myserv.selectedproduct={  
        _id:"",
        name:"",
        status:"",
        price:null,
        brand:"",
        care:"",
        category:"",
        colour:"",
        material:"",
        size:null
    }

  }
  submitFunction(form: NgForm) 
  {
    
    this.myserv.postMymodel(form.value).subscribe((res) =>{
        this.resetTable(form);
        });
    
  

}
}
