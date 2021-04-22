import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { TaskModule } from './views/task/task.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    HttpClientModule,
    TableModule,
    ToolbarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
