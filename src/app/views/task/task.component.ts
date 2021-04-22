import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskList: Task[];
  selectedTask:Task[];

  constructor(
      private _taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }
  
  getTasks(){
    this._taskService.getTaskList()
    .subscribe(
      data => {
        this.taskList = data;
        console.log(data);

      }, error => {

      });
  }
}
