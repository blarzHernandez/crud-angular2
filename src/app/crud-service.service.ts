import { Injectable } from '@angular/core';
import {CrudAngular} from './crud-angular';
import {Http, Response} from '@angular/http';
//Decorator
@Injectable()
export class CrudServiceService {
 lastId : number = 0;
 todos : CrudAngular[] = [];

  constructor(private http:Http) { }


//post request
addTodo(todo:CrudAngular): CrudServiceService{
  if(!todo.id){
    todo.id = ++this.lastId;
  }
  this.todos.push(todo);
  return this;
}


updateTodoById(id:number, values:Object={}):CrudAngular{
  let todo = this.getTodoById(id);
  if(!todo){
    return null;
  }
  Object.assign(todo,values);
  return todo;
}

//get request
getTodoById(id:number):CrudAngular{
  return this.todos
  .filter(todo => todo.id === id)
  .pop();

}


getAllTodos():CrudAngular[]{
  return this.todos;
}

toggleTodoComplete(todo:CrudAngular){
  let updatedTodo = this.updateTodoById(todo.id,{complete:!todo.complete});
  return updatedTodo;
}






}
