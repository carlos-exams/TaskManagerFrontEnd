import { Task } from 'src/app/models/task';
import { TaskStatus } from '../models/taskStatus';

export class TaskCreateDto {
    name: string;
    description: string;
    taskStatusId: number;

    constructor(task:Task, taskStatus: TaskStatus){
        this.name = task.name;
        this.description = task.description;
        this.taskStatusId = taskStatus.id;
    }
}