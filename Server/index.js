const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');



var app = express()
app.use (express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json());


// db connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TaskManagement');
}

// schema creation
const Task = new mongoose.Schema({
    Nam: String,
    Pos: String,
    Ass: String,
    Sub: String,

  });
//   modal creation
const Tsk = mongoose.model('Tsk', Task);


app.post("/TskData", (req,res)=>{
   
    var NamOne = req.body.NamOne;
    var PosOne= req.body.PosOne;
    var AssOne= req.body.AssOne;
    var SubOne = req.body.SubOne

console.log(NamOne);
console.log(PosOne);
console.log(AssOne);
console.log(SubOne);
    

    const TaskData= new Task({Nam:NamOne,Pos:PosOne,Ass:AssOne,Sub:SubOne})
    TaskData.save()

    res.send({"msg":"Assigned"})
})



// database View


app.get("/Viewdb",async (req,res)=>{
    var myData = await Tsk.find()
    res.send({"myData":myData})
  })


  // update by id

//   app.put('/api/Tsk/:id', async (req, res) => {
//   try {
//     const updatedItem = await Tsk.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!updatedItem) {
//       return res.status(404).json({ message: 'Item not found' });
//     }

//     return res.json(updatedItem);
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// });
app.get("/TskViewBYId/:id",async(req,res)=>{
  const idn = req.params.id
  console.log(idn);
  const  result = await Tsk.find({_id:idn})
  res.send({"myDt":result})
})

app.post("/EUpd:TaskId",(req,res)=>{

const TaskId = req.params.TaskId;

const {Nam,Pos,Ass,Sub}= req.body;

// update details

const result = Tsk.updateOne({_id:TaskId},{Nam,Pos,Ass,Sub})
 

res.send({"msg":"upadated"})
})


// Delete


  




app.listen(9000,()=>{
    console.log("server running http://localhost:9000")
})