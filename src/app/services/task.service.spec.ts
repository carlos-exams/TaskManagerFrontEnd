import { TestBed, async, inject } from '@angular/core/testing';
import { TaskService } from './task.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Task } from '../models/task';


describe('Service: Task', () => {
  let taskService: TaskService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [TaskService]
    });
    
    taskService = TestBed.get(TaskService);
    httpMock = TestBed.get(HttpTestingController);
  });


  it(`should fetch tasks as an Observable`, async(
    inject([HttpTestingController, TaskService], (httpClient: HttpTestingController, taskService: TaskService) => {
      const mockTask1 = new Task(1, "Task1", "first description", new Date(), new Date(), "Created", 1);
      const mockTask2 = new Task(2, "Task2", "second description", new Date(), new Date(), "Created", 1);
      const mockTasks =[
        mockTask1,
        mockTask2];

      taskService.getTaskList()
        .subscribe((tasks: any) => {
          expect(tasks.length).toBe(2);
        });

      let req = httpMock.expectOne('http://localhost:8080/task');
      expect(req.request.method).toBe("GET");

      req.flush(mockTasks);
      httpMock.verify();

    })));

});
