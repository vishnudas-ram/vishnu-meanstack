import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BookproductComponent } from './bookproduct/bookproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteComponent } from './delete/delete.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { DaterangeComponent } from './daterange/daterange.component';



const routes: Routes = [{path:'',component:ProductdetailComponent},
{path:'Link 2',component:BookproductComponent},{path:'Link 3',component:ProductlistComponent},
{path:'Link 4',component:UpdateproductComponent},{path:'Link 5',component:DeleteComponent},
{path:'Link 6',component:DaterangeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
