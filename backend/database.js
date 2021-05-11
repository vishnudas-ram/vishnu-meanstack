const mongconnect=require('mongoose')

mongconnect.connect('mongodb://localhost:27017/details',

function(error)
   {
       if(!error){ console.log("connected to database") }

       else{ console.log("connection error") }
   })

module.exports=mongconnect

//database connection string