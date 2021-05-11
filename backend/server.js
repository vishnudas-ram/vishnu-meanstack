const express=require('express')
var server=express()
const bodyparser=require('body-parser')
const cors=require('cors')
const {mongconnect}=require('./database.js')
const port=3000;

var mycontroller=require('./controllers/mycontroller')

server.use(bodyparser.json())
server.use(cors({origin:'http://localhost:4200'}))
server.use('/mycontrol',mycontroller)


server.listen(port,function(){ console.log('server ready') })

//this is my server page