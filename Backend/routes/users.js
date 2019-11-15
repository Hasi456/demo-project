const express=require('express');
const router=express.Router();
const mysql=require('mysql');
const conn=require('../config/database');

router.post("/register",(req,res)=>{
    //console.log(req.body);
   var sql="insert into driver SET ?";

   var values={name:req.body.name,nic:req.body.nic,address:req.body.addr,email:req.body.email,phone_no:req.body.contactno};

    conn.query(sql,values,function(err,result){
       
        if(err){
            res.json({state:false,msg:"data not inserted!"});
        }
        else{
            res.json({state:true,msg:"data inserted!"});
        }
       
    });

});

router.get("/driver_details",(req,res)=>{
    
    var sql="select * from driver";

    conn.query(sql,function(err,rows,fields){
        if(err){
           // res.json({state:false,msg:"data not Displayed!"});
           res.status(500).send({error:'Failed to display '})
           
        };
        // res.json({state:true,msg:"data Displayed!"});
           /*res.status(200).json({
            //    message:"",
              rows
           
           });*/
           res.send(rows);
        
       // console.log(result);
    });
});

router.post("/update_driver/:id",(req,res)=>{

   var sql="update driver SET ? where ID=?" 

   var values={name:req.body.name, nic:req.body.nic, email:req.body.email, address:req.body.address, phone_no:req.body.phone_no};

   var ID=req.params.id;
   conn.query(sql,[values,ID], function(err,result){
  
    if(err){
        if(err){
            res.json({state:false,msg:"data not inserted!"});
        }
        else{
            res.json({state:true,msg:"data inserted!"});
        }

     }
    });
});


router.get("/find/:id",(req,res)=>{
    
    var sql="select *from driver where ID=?";

    var Id=req.params.id;
    
    conn.query(sql,[Id],function(err,rows,fields){
        if(err){
           // res.json({state:false,msg:"data not Displayed!"});
           res.status(500).send({error:'Failed to find '})
           
        };
        // res.json({state:true,msg:"data Displayed!"});
        res.send(rows);
        
       // console.log(result);
    });
});

router.get("/delete/:id",(req,res)=>{

 var sql="delete from driver where ID=?";

 var Id=req.params.id;

 conn.query(sql,[Id],function(err,rows,fields){
    
        if(err){
            res.json({state:false,msg:"Not deleted"});
        }
        else{
            res.json({state:true,msg:"Deleted!"});
           
        }
        
     
});

})
router.get("",(req,res)=>{
    res.send("Hello  users");
});

module.exports=router;