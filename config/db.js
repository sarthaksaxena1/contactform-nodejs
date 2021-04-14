const mongoose = require('mongoose') // importing mongoose 
const config = require('config') //importing config module

const connectDB = ()=>{

    const mongoURI=config.get('mongoURI')

    mongoose.connect(mongoURI,{ useNewUrlParser: true ,useUnifiedTopology: true } ,(err)=>{
        if(err)
        {
            console.log("Some Error Occured : ", err)
        }
        else{
            console.log(" DB CONNECTED SUCESSFULLY ")
        }
    })
}



module.exports = connectDB