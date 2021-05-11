export class Mymodel {
   public _id:String;
   public name:String;
   public status:String;
   public price:Number;
   public brand:String;
   public care:String;
   public category:String;
   public colour:String;
   public material:String;
   public size:Number  
   
constructor(_id:String,name:String,status:String,price:Number, brand:String,care:String,category:String,colour:String,material:String,size:Number){
    this._id=_id;
    this.name=name;
    this.status=status;
    this.price=price;
    this.brand=brand;
    this.care=care;
    this.category=category;
    this.colour=colour;
    this.material=material;
    this.size=size
}
}
