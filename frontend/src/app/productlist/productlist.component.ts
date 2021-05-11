import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import {MyserviceService} from '../shared/myservice.service';
import {Mymodel} from '../shared/mymodel.model';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers:[MyserviceService]

})
export class ProductlistComponent implements OnInit {

  constructor(public myserv:MyserviceService) { }

  ngOnInit(): void {
    this.refreshTable();
  }
  
  refreshTable(){
    this.myserv.getMymodelList().subscribe((res)=>{
      this.myserv.arrayproduct=res as Mymodel[];
    })
  
  }
}
