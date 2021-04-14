const mongoose = require('mongoose')

const Schema= mongoose.Schema // intliazing schema function 

const ContactSchema =  new Schema( //ContactSchema Has Been Created 

{
firstname:{
    type:String,
    require:true,
    trim:true,
},
lastname:{
    type:String,
    require:true,
    trim:true
},
country:{
    type:String,
    require:true,
    trim:true
},
message:{
    type:String,
    required:true,
    trim:true
}
}
) 


const ContactModel = mongoose.model('contacts',ContactSchema)

module.exports=ContactModel
