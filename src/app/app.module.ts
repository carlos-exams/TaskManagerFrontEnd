import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { TaskModule } from './views/task/task.module';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';
import { TaskStatusService } from './services/taskStatus.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    HttpClientModule,
    MenubarModule

  ],
  providers: [TaskStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
