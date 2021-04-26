import { Task } from 'src/app/models/task';

export class TaskDeleteDto {
    idSet: number[];

    constructor(tasks:Task[]){
        this.idSet = []
        tasks.forEach(t => this.idSet.push(t.id));
    }
}