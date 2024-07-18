import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }
  getTodos(){
    return this.http.get('http://localhost:3000/api/todos/');
  }
  deleteTodo(id){
    return this.http.delete('http://localhost:3000/api/todos/'+id);
  }
  // getTodoById(id){}
   addTodo(todo){
      return this.http.post('http://localhost:3000/api/todos/',todo);
    }

    getTodoById(id){
      return this.http.get('http://localhost:3000/api/todos/'+id);
    }


    
    updateTodo(id,todo){
      return this.http.put('http://localhost:3000/api/todos/'+id,todo);
    }

}
