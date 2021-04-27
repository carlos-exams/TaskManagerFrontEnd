export class TaskStatus {
    id: number;
    name: string;
    description: string;
    creationDate: Date;
    updateDate: Date;

    constructor(    
        id: number,
        name: string,
        description: string,
        creationDate: Date,
        updateDate: Date){

        this.id = id;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
    }
}