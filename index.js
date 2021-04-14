const express = require('express') //importing of express module
const mongoose = require('mongoose') //importing of mongoose module 
const config = require('config')
const app = express() // instance of express module
const connectDB = require('./config/db.js') //importing connectDb funtion from db.js
const ContactModel = require('./models/Contact')


app.set('view engine', 'ejs'); // we are going to use ejs in our nodejs project


connectDB() //Connect Database 



app.get('/',(req,res)=>{
    res.render("home")
})


app.get('/submit',(req,res)=>{
    // console.log(contactdata)
    // var data ={"firstname":"Vansh","lastname":"Devgan","country":"India","message":"Hello How Are You"}

    contactdata=req.query

    const Contact = new ContactModel(contactdata)
    Contact.save((err)=>{

        if(err)
        {
            console.log(" Some Error Occuerd",err)
        }
        else{
            console.log("Data Inserted Into Database ")
        }
    })
    res.render("submit")
})

app.get('/admin',(req,res)=>
{
    ContactModel.find({}, function(err, contacts) {
        if (err) 
        {
          console.log(err)
          res.send("Error 404")
        } 
        else {
          console.log(contacts)
          res.render("admin",{data:contacts})
        }

})
})

app.listen(4444,'127.0.0.1',()=>{

    console.log("Server Is Running ")
})
    
