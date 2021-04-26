import { TaskCreateDto } from './../requestDto/taskCreateDto';
import { environment } from './../../environments/environment';
import { TaskStatus } from './../models/taskStatus';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { TaskEditDto } from '../requestDto/taskEditDto';
import { TaskDeleteDto } from '../requestDto/taskDeleteDto';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _httpClient: HttpClient) { }

  getTaskList():Observable<Task[]>{
    return this._httpClient.get<Task[]>(environment.backendUrl +'/task');
  }

  postTask(task: Task, taskStatus: TaskStatus) :Observable<Object>{
    const data = new TaskCreateDto(task, taskStatus);
    return this._httpClient.post(environment.backendUrl +'/task', data);
  }

  putTask(task: Task, taskStatus: TaskStatus) :Observable<Object>{
    const data = new TaskEditDto(task, taskStatus);
    return this._httpClient.put(environment.backendUrl +'/task', data);
  }

  deleteTasks(tasks: Task[]) :Observable<Object>{
    const data = new TaskDeleteDto(tasks);
    return this._httpClient.post(environment.backendUrl +'/task/delete', data)
  }

}
