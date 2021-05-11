import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mymodel } from './mymodel.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  selectedproduct:Mymodel;

  arrayproduct:Mymodel[];
  readonly url="http://localhost:3000/mycontrol";
  
  constructor(private http:HttpClient) { }

  postMymodel(myMod:Mymodel){

    return this.http.post(this.url, myMod)
  }
  
  
  getMymodelList(){
    return this.http.get(this.url);
  }
 
  putMymodel(myMod: Mymodel){
    return this.http.put(this.url + `/${myMod._id}`, myMod);
  }
  
  
  deleteMymodel(_id:string){
    return this.http.delete(this.url + `/${_id}`);
  }


}
