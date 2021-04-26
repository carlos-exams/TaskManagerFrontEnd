import { environment } from '../../environments/environment';
import { TaskStatus } from '../models/taskStatus';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  constructor(private _httpClient: HttpClient) { }

  getTaskStatusesList():Observable<TaskStatus[]>{
    return this._httpClient.get<TaskStatus[]>(environment.backendUrl +'/task-status');
  }


}
