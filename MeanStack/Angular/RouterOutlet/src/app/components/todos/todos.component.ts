import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private todoService:TodosService,private router:Router) { }
tasks:any=[]
  ngOnInit() {
    this.getTodosFromService();
  }
getTodosFromService(){
  this.todoService.getTodos().subscribe((result)=>{
    console.log(result);
    this.tasks=result;
  })
}

  deleteFromService(id)
  {
    this.todoService.deleteTodo(id).subscribe((result)=>{
      alert('Data deleted!');
      this.getTodosFromService();
    })
  }

  loadEditComponent(id){
    alert(id);
    this.router.navigate(['/edit/'+id]);
  }

loadTodoCreate()
{this.router.navigate(['/create']);

}



}
