import { Task } from './../../models/task';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { HttpClient } from '@angular/common/http';


describe('TaskComponent', () => {
  let fixture: ComponentFixture<TaskComponent>;
  let component: TaskComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TaskComponent
      ], providers:[
        HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('the component should have been created', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
/*
  it('Task Should be undefined when initialized', () => {
    expect(component.task).toBeUndefined();
  });

  it('Task Should be undefined when initialized', () => {
    component.openNew();
    expect(component.task).toBeDefined();
  });
*/
});
