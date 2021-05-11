import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {MyserviceService} from '../shared/myservice.service';
import {Mymodel} from '../shared/mymodel.model';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css'],
  providers:[MyserviceService]

})
export class UpdateproductComponent implements OnInit {

  constructor(public myserv:MyserviceService) { }

  ngOnInit(): void {
    this.resetTable();
    this.refreshTable();
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
   
      this.myserv.putMymodel(form.value).subscribe((res) =>{
        this.resetTable(form);
        this.refreshTable();
        });
    
      }
      refreshTable(){
        this.myserv.getMymodelList().subscribe((res)=>{
          this.myserv.arrayproduct=res as Mymodel[];
        })
      
      }
      tableEdit(myMod:Mymodel){
        this.myserv.selectedproduct=myMod;
        }
        tableDelete(_id:string,form: NgForm){
        this.myserv.deleteMymodel(_id).subscribe(
          (res)=>{
            this.resetTable(form);
        this.refreshTable();
          })
        }
}
