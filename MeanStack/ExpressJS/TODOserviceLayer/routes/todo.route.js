// //mock data store json format
// const todos=[
//     {id:1,name:"Watch movie",status:"Incomplete"},
//     {id:2,name:"Wash Clothes",status:"Incomplete"},
//     {id:3,name:"Learn angular",status:"Incomplete"}
// ];
const Todo=require('../models/todo.model')

const express=require('express');
//creating application object
const router=express.Router();

//POST
router.post('/',(req,res)=>{
    let newTask=new Todo({name:req.body.name,status:"Incomplete"});
    newTask.save((err,result)=>{
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
// router.get('/',(req,res)=>{
  
//     res.send(todos);
// })

// // app.get('/api/todos/:id',(req,res)=>{
// //     let myId=req.params.id;
// //     res.send('You called: api/todos/:id='+myId);
// // })


// //GET

// router.get('/:id',(req,res)=>{
//     const task=todos.find(obj=>obj.id==parseInt(req.params.id));
//     if(!task) res.send('Task with this ID not found');
//     else res.send(task);
// })

// //POST (INSERT)
// router.post('/',(req,res)=>{
//     let newTask={id:todos.length+1,name:req.body.name,status:"Incomplete"};
//     todos.push(newTask);
//     res.send(newTask);
// })

// //DELETE
// router.delete('/:id',(req,res)=>{
//     const task=todos.find(obj=>obj.id==parseInt(req.params.id));
//     if(!task) res.send('Task with this ID not found');
//     else {const indexPosition=todos.indexOf(task);
// todos.splice(indexPosition,1);
// res.send('Task deletedd')
//     }
// })

// //PUT
// router.put('/:id',(req,res)=>{
//     const task=todos.find(obj=>obj.id==parseInt(req.params.id));
//     if(!task) res.send('Task with this ID not found');
//     else 
//     {
//         task.name=req.body.name;
//         task.status=req.body.status;
//         res.send(task);
//     }
// })
module.exports=router;