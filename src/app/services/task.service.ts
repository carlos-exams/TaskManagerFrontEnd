import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _httpClient: HttpClient) { }

  getTaskList():Observable<Task[]>{
    return this._httpClient.get<Task[]>('http://localhost:8080/tasks');
  }

}
