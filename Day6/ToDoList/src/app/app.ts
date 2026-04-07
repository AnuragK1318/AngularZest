import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ToDoList');

  task='';
  nextId = 1;
  taskList:{id:number,task:string}[]=[];

  addTask(){
    this.taskList.push({id:this.nextId++, task: this.task})
    this.task=''
    console.log(this.taskList);
  }

  deleteTask(id:number){
    this.taskList=this.taskList.filter(task => task.id !== id);
  }
}
