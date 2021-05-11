import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BookproductComponent } from './bookproduct/bookproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DaterangeComponent } from './daterange/daterange.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import{ HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftnavComponent,
    ProductdetailComponent,
    BookproductComponent,
    UpdateproductComponent,
    DeleteComponent,
    ProductlistComponent,
    DaterangeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
