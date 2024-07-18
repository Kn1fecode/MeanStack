const cust=require('../models/cust.model')

const express=require('express');
//creating application object
const router=express.Router();

//POST
router.post('/',(req,res)=>{
    let newcust=new cust({name:req.body.name,address:req.body.address,gender:req.body.gender,contact:req.body.contact,email:req.body.email});
    newcust.save((err,result)=>{
    if(err)res.json(err)
    else res.json({msg:'Task added'})
})

})

//GET

    
router.get('/',(req,res)=>{
      Todo.find((err,result)=>{
          if(err)res.json(err);
          else res.json(result);
      })
      
    })


    router.get('/:id',(req,res)=>{
        Todo.findById({_id:req.params.id},
        (err,result)=>{
            if(err)res.json(err);
            else res.json(result);
        })
        
      })


      router.delete('/:id',(req,res)=>{
        Todo.remove({_id:req.params.id},
        (err,result)=>{
            if(err)res.json(err);
            else res.json({msg:'Task deleted'});
        })
        
      })


      router.put('/:id',(req,res)=>{
        Todo.findByIdAndUpdate({_id:req.params.id},
            {$set:{name:req.body.name,status:req.body.status}},
        (err,result)=>{
            if(err)res.json(err);
            else res.json({msg:'Task updated'});
        })
    })


module.exports=router;