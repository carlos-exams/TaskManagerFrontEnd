import { Task } from './../../models/task';
import { TaskComponent } from './task.component';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Observable, Observer } from 'rxjs';
import { TaskStatusService } from 'src/app/services/taskStatus.service';
import { TaskStatus } from 'src/app/models/taskStatus';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent ]
      ,imports : [HttpClientModule]
    });
    //.compileComponents();
  }));

  describe(':', () => {

    function setup() {
      const fixture = TestBed.createComponent(TaskComponent);
      const component = fixture.componentInstance;
      const taskService = fixture.debugElement.injector.get(TaskService);
      const taskStatusService = fixture.debugElement.injector.get(TaskStatusService);

      return { fixture, component, taskService, taskStatusService };
    }

    beforeEach(() => {
      fixture = TestBed.createComponent(TaskComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('Task variable Should be undefined when initialized', () => {
      const { component } = setup();
      expect(component.task).toBeUndefined();
    });

    it('Task variable Shouldnt be undefined when Open New Window', () => {
      const { component } = setup();
      component.openNew();
      //document.getElementById('NewTask').click();
      expect(component.task).toBeDefined();
    });

    it('TaskService.FindAll() should populate TaskList', () => {
      const { fixture, component, taskService } = setup();
      const mockTask1 = new Task(1, "Task1", "first description", new Date(), new Date(), "Created", 1);
      const mockTask2 = new Task(2, "Task2", "second description", new Date(), new Date(), "Created", 1);
      const mockTasks =[
        mockTask1,
        mockTask2];

      spyOn(taskService, 'getTaskList').and.returnValue(
        Observable.create((observer: Observer<Task[]>) => {
          observer.next(mockTasks);
          return observer;
        })
      );

      fixture.detectChanges();
      expect(component.taskList.length).toBe(2);
    });
    
    it('TaskService.FindAll() ERROR shouldn´t populate TaskList', () => {
      const { fixture, component, taskService } = setup();
      const error = {
          "timestamp": "2021-04-26T14:36:36.313+00:00",
          "status": 400,
          "error": "Bad Request",
          "message": "Back end error",
          "path": "/task"
      }

      spyOn(taskService, 'getTaskList').and.returnValue(
        Observable.create((observer: Observer<Task[]>) => {
          return observer.error(error);
        })
      );

      fixture.detectChanges();
      expect(component.taskList).toBeUndefined;
    });
    
  it('TaskStatusService.FindAll() should populate TaskList', () => {
    const { fixture, component, taskService, taskStatusService } = setup();
    const mockTasksStatus = new TaskStatus(1,"Created", "Created Status", new Date(), new Date());
    const mockTasksStatusList = [mockTasksStatus];

    spyOn(taskStatusService, 'getTaskStatusesList').and.returnValue(
      Observable.create((observer: Observer<TaskStatus[]>) => {
        observer.next(mockTasksStatusList);
        return observer;
      })
    );

    fixture.detectChanges();
    expect(component.taskStatusList.length).toBe(1);
  });
  
  it('TaskStatusService.FindAll() ERROR shouldn´t populate TaskList', () => {
    const { fixture, component, taskService, taskStatusService } = setup();
    const error = {
        "timestamp": "2021-04-26T14:36:36.313+00:00",
        "status": 400,
        "error": "Bad Request",
        "message": "Back end error",
        "path": "/task"
    }

    spyOn(taskStatusService, 'getTaskStatusesList').and.returnValue(
      Observable.create((observer: Observer<TaskStatus[]>) => {
        return observer.error(error);
      })
    );

    fixture.detectChanges();
    expect(component.taskList).toBeUndefined;
  });

  });
});
