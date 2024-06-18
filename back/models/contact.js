const mongoose =require('mongoose')

const formSchema=new mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    msg:{
        type:String,
        require:true
    }
})
const formModel =mongoose.model("Form",formSchema)
module.exports=formModel