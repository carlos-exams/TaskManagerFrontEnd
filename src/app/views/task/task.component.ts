import { TaskStatus } from './../../models/taskStatus';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TaskStatusService } from 'src/app/services/taskStatus.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[MessageService,ConfirmationService]
})
export class TaskComponent implements OnInit {
  taskList: Task[];
  selectedTasks:Task[];
  task: Task;

  submitted: boolean;
  taskStatusList: TaskStatus[];
  selectedTaskStatus: TaskStatus;
  taskDialog: boolean;

  constructor(
      private _taskService: TaskService,
      private _taskStatusService: TaskStatusService,
      private _messageService: MessageService, 
      private _confirmationService: ConfirmationService
      ) { }

  ngOnInit() {
    this.getTasks();
    this.getTaskStatuses();
  }
  
  getTasks(){
    this._taskService.getTaskList()
    .subscribe(
      data => {
        this.taskList = data;
        console.log(data);

      }, error => {
            this._messageService.add({severity:'error', summary: 'Error retriving tasks', detail: 'Couldn´t retrieve tasks', life: 3000});
      });
  }

  getTaskStatuses(){
    this._taskStatusService.getTaskStatusesList()
    .subscribe(
      data => {
        this.taskStatusList = data;
        console.log(data);
      }, error => {
            this._messageService.add({severity:'error', summary: 'Error retriving task statuses', detail: 'Couldn´t retrieve task statuses', life: 3000});
      });
  }

  
  openNew() {
    this.task = new Task();
    this.selectedTaskStatus = null,
    this.submitted = false;
    this.taskDialog = true;
  }

  deleteSelectedTasks() {
      this._confirmationService.confirm({
          message: 'Are you sure you want to delete the selected products?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
             this._taskService.deleteTasks(this.selectedTasks)
             .subscribe(
                data => {
                    this._messageService.add({severity:'success', summary: 'Successful', detail: 'Tasks Deleted', life: 3000});
                    this.getTasks();
                }, error => {
                    this._messageService.add({severity:'error', summary: 'Error Deleting tasks', detail: 'Some tasks may not have been deleted ', life: 3000});
                });
          }
      });
  }

  editTask(task: Task) {
      this.task = {...task};
      this.selectedTaskStatus = this.taskStatusList.find(statuses => statuses.id == this.task.statusId);
      this.taskDialog = true;
  }

  deleteTask(task: Task) {
      this._confirmationService.confirm({
          message: 'Are you sure you want to delete ' + task.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              const arrayOfTasks: Task[] = [task];
              this._taskService.deleteTasks(arrayOfTasks)
              .subscribe(
                 data => {
                     this._messageService.add({severity:'success', summary: 'Successful', detail: 'Tasks Deleted', life: 3000});
                     this.getTasks();
                 }, error => {
                     this._messageService.add({severity:'error', summary: 'Error Deleting tasks', detail: error.error.message, life: 3000});
                 });
          }
      });
  }

  hideDialog() {
      this.taskDialog = false;
      this.submitted = false;
      this.selectedTasks = null;
  }

  saveTask() {
      this.submitted = true;

      if (this.task.name.trim()) {
          // If task exist we modify
          if (this.task.id) {
            this._taskService.putTask(this.task, this.selectedTaskStatus)
            .subscribe(
                data => {
                    this._messageService.add({severity:'success', summary: 'Successful', detail: 'Task Updated', life: 3000});
                    this.getTasks();
                    this.hideDialog()
                }, error => {
                    this._messageService.add({severity:'error', summary: 'Error Updating task', detail: error.error.message , life: 3000});
                });
          }
          // If task doesnt exist we create it
          else {
            if(this.selectedTaskStatus){
                this._taskService.postTask(this.task, this.selectedTaskStatus)
                .subscribe(
                    data => {
                        this._messageService.add({severity:'success', summary: 'Successful', detail: 'Task Created', life: 3000});
                        this.getTasks();
                        this.hideDialog()
                    }, error => {
                        this._messageService.add({severity:'error', summary: 'Error creating task', detail: error.error.message, life: 3000});
                    });;
            } else {
                this._messageService.add({severity:'warning', summary: 'Error- please select valid status', detail: 'Once selected, please try again', life: 3000});
            }
          }
      }
  }
}
