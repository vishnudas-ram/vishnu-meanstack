const mongconnect=require('mongoose')

var details=mongconnect.model('details',
    {
        name:{type:String},
        
        status:{type:String},
        
        price:{type:Number},
        
        brand:{type:String},
        
        care:{type:String},
        
        category:{type:String},
        
        colour:{type:String},
        
        material:{type:String},
        
        size:{type:Number}
   
    })

module.exports={details}

//product details for product creation form