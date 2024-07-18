import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  constructor(private todoService:TodosService,private router:Router
) { }

  ngOnInit() {
  }


  addTaskToService(taskname)
  {
    let newTask={
      "name":taskname
    }

    this.todoService.addTodo(newTask).subscribe((result)=>{
      this.router.navigate(['/todos']);
    })
  }
goBack(){
  this.router.navigate(['/todos']);
}
 
}
