const express=require ('express')
const port=3001
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const formModel=require('./models/contact.js')

mongoose.connect('mongodb://127.0.0.1:27017/form')
app.use(express.json())
app.use(cors())

app.post('/submit',async(req,res)=>{
console.log('Request Body:',req.body)
const{Fname,Lname,Msg}=req.body
const newfname=Fname
const newlname=Lname
const newmsg=Msg
formModel.create({fname:newfname,lname:newlname,msg:newmsg})
// formModel.create({fname:newfname,lname:newlname,msg:newmsg})=req.body
console.log(newfname)
console.log(newlname)
console.log(newmsg)

    // const {newfname, newlname,newmsg} = req.body;
    // formModel.create({fname:newfname,lname:newlname,msg:newmsg})
})

app.listen(port,()=>{

    console.log(`Example app listening on port ${port}`)
})
