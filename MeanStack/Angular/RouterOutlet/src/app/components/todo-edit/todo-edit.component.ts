import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from '@angular/router';
import{TodosService} from '../../services/todos.service';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  constructor(private todoService:TodosService,private router:Router,private route:ActivatedRoute) { }
task:any={"_id":"","name":"","status":""};
  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.todoService.getTodoById(id).subscribe((result)=>{
      this.task=result;
    })
  }

  save()
  {
    this.todoService.updateTodo(this.task._id,this.task).subscribe((result)=>{
      this.router.navigate(['/todos'])
    })
  }

}
