const express=require('express');
const bodyParser= require('body-parser');

const cors= require('cors');
const app=express();
const path=require('path');
const user=require('./routes/users');
const config=require('./config/database');
/*
const conn=mysql.createConnec
tion(config.database);

if(conn){
    console.log("database connected");
}else{
    console.log("database not connected");
}*/ 
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));

app.use("/user",user);

app.get("/",(req,res)=>{

    res.send("Hello Hasii");
});

app.listen(3000, function(){
    console.log("Listening to port 3000");
});