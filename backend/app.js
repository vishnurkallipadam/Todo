var express = require('express');
const app = express();
var cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var todoData=require('./src/model/todoData')


const port = process.env.PORT || 5200;

app.post('/create',(req,res)=>{
  res.header("Acces-Control-Allow-Origin","*");
  res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
  console.log("create");
  console.log(req.body);
  let data={
    name:req.body.name,
    description:req.body.description,
    status:"pending",
    date:new Date().toLocaleDateString()
  }
  var tododata=new todoData(data);
  tododata.save().then(()=>{
    res.send()
  })
})

app.get('/getTask',(req,res)=>{
  res.header("Acces-Control-Allow-Origin","*");
  res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
  todoData.find().then((data)=>{
    res.send(data)
  })

})

app.get('/completeTask/:id',(req,res)=>{
  res.header("Acces-Control-Allow-Origin","*");
  res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
  todoData.findByIdAndUpdate({_id:req.params.id}, {$set:{status:"completed"}}).then((data)=>{
    res.send()
  })

})

app.get('/deleteTask/:id',(req,res)=>{
  res.header("Acces-Control-Allow-Origin","*");
  res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
  todoData.findByIdAndDelete({_id:req.params.id}).then((data)=>{
    res.send()
  })

})

app.listen(port, () => {
    console.log(`started on port: ${port}`);
});

module.exports = app;