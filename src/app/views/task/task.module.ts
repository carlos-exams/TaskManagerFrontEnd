import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ButtonModule
  ],
  declarations: [
    TaskComponent
  ],
  exports:[
    TaskComponent
  ]
})
export class TaskModule { }
