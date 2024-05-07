const mongoose = require('mongoose')

const portfolio = mongoose.Schema({
    name:{
      type:String,
      required:[true,"Please add name"],
      trim:true,
    //   maxlength:[20,"maxlength should be 20 digits "]
    }
    ,
    email:{
        type:String,
        required:[true,"Please add email"],
      },
      message:{
        type:String,
        required:[true,"Please add message"],
      }
})

module.exports= mongoose.model('Portfolio',portfolio)