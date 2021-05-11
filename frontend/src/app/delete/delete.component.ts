import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {MyserviceService} from '../shared/myservice.service';
import {Mymodel} from '../shared/mymodel.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[MyserviceService]

})
export class DeleteComponent implements OnInit {
  

  constructor(public myserv:MyserviceService) { }

  ngOnInit(): void {
    this.refreshTable();

  }
  
  refreshTable(){
    this.myserv.getMymodelList().subscribe((res)=>{
      this.myserv.arrayproduct=res as Mymodel[];
    })
  
  }
  tableDelete(_id){
    this.myserv.deleteMymodel(_id).subscribe(
      (res)=>{
        this.refreshTable();
      })
    }
}
