import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { TaskModule } from './views/task/task.module';
import { HttpClientModule } from '@angular/common/http';
import {MenubarModule} from 'primeng/menubar';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
