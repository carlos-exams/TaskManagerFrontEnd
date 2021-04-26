import { Task } from 'src/app/models/task';
import { TaskStatus } from '../models/taskStatus';

export class TaskEditDto {
    id: number;
    description: string;
    taskStatusId: number;

    constructor(task:Task, taskStatus: TaskStatus){
        this.description = task.description;
        this.taskStatusId = taskStatus.id;
        this.id = task.id;
    }
}