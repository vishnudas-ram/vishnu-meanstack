import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-daterange',
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.css']
})
export class DaterangeComponent implements OnInit {

  campaignOne:FormGroup;
  campaignTwo:FormGroup;


  constructor() {
    const today=new Date();
    const month=today.getMonth();
    const year=today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });

   }

  ngOnInit(): void {
  }

}
