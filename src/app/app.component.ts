import { Component } from '@angular/core';
import {CrudAngular} from './crud-angular'
import { CrudServiceService} from './crud-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CrudServiceService]
})

//Main component
export class AppComponent {
//  title = 'Ok ready!';
  newTodo : CrudAngular = new CrudAngular();
  //Constructor
  constructor(private CrudService:CrudServiceService){}

addTodo(){
  this.CrudService.addTodo(this.newTodo);
  //console.log(this.CrudService.addTodo(this.newTodo));
  this.newTodo = new CrudAngular();
}

 toggleTodoComplete(todo){
   this.CrudService.toggleTodoComplete(todo);
 }

 get todos(){
   return this.CrudService.getAllTodos();
 }

}
