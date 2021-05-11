const express=require('express')
var route=express.Router()
var {details}=require('../models/details')
var typeId=require('mongoose').Types.ObjectId
    
    

    route.get('/',function(req,res) { details.find(function(error,data)
        {
          if(!error) { res.send(data) }
          else{ console.log('cannot display data') }
        }
      )
    })

    route.post('/',function(req,res){
        var demo=new details({
          
            name:req.body.name,

            status:req.body.status,

            price:req.body.price,

            brand:req.body.brand, 

            care:req.body.care,

            category:req.body.category,

            colour:req.body.colour,

            material:req.body.material,

            size:req.body.size,  
         })
         
         demo.save(function(error,data){

            if(!error){ res.send(data) }

            else{ console.log("cannot insert") }
        })
    })

    //Getting by id
   
    route.get('/:id',function(req,res){

      if(!typeId.isValid(req.params.id))
      {
        res.send('no records')
      }

      details.findById(req.params.id,function(error,data){
        if(!error){ res.send(data)}

        else{console.log('error in display data')}
      })
    })

    //edit and update

    route.put('/:id',function(req,res){

      if(!typeId.isValid(req.params.id))
      {
        res.send('error')
      }

      var demo={

             name:req.body.name,

            status:req.body.status,

            price:req.body.price,

            brand:req.body.brand, 

            care:req.body.care,

            category:req.body.category,

            colour:req.body.colour,

            material:req.body.material,

            size:req.body.size  
      };

      details.findByIdAndUpdate(req.params.id, { $set: demo }, function(error, data) {

        if (!error) { res.send(data); }

        else { console.log('update error :' + JSON.stringify(error)); }
    })
    })
    
    route.delete('/:id',function(req,res){

      if (!typeId.isValid(req.params.id))

          { res.send('error'); } 

          details.findByIdAndRemove(req.params.id,function(error,data){

          if (!error) { res.send(data); }
          
          else { console.log('delete error :' + JSON.stringify(error)); }
      })
  })


    module.exports=route