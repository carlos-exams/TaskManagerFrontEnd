import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule
  ],
  declarations: [
    TaskComponent,
    TaskListComponent
  ],
  exports:[
    TaskComponent
  ]
})
export class TaskModule { }
