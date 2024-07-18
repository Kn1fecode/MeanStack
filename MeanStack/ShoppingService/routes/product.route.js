const Product=require('../models/product.model');
const express=require('express');

const router=express.Router();

router.post('/',(req,res)=>{
    let newProd=new Product({
        name:req.body.name,
       cost:req.body.cost,
       category:"Mobile phones"
    });
    newProd.save((err,result)=>{
        if(err) res.json(err);
        else res.json({msg:'Task added'})
    })
})


router.get('/',(req,res)=>{
    Product.find((err,result)=>{
    if(err) res.json(err);
    else res.json(result)
})
})

router.get('/:id',(req,res)=>{
    Product.findById({_id:req.params.id},
    (err,result)=>{
        if(err)res.json(err);
        else res.json(result);
    })
    
  })


  router.delete('/:id',(req,res)=>{
    Product.remove({_id:req.params.id},
    (err,result)=>{
        if(err)res.json(err);
        else res.json({msg:'Task deleted'});
    })
    
  })


  router.put('/:id',(req,res)=>{
    Product.findByIdAndUpdate({_id:req.params.id},
        {$set:{name:req.body.name,cost:req.body.cost,category:req.body.category}},
    (err,result)=>{
        if(err)res.json(err);
        else res.json({msg:'Task updated'});
    })
})

module.exports=router;