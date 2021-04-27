export class Task {
    id: number;
    name: string;
    description: string;
    creationDate: Date;
    updateDate: Date;
    statusName: string;
    statusId: number;

    constructor(    
        id: number,
        name: string,
        description: string,
        creationDate: Date,
        updateDate: Date,
        statusName: string,
        statusId: number){

        this.id = id;
        this.name = name;
        this.description = description;
        this.creationDate = creationDate;
        this.updateDate = updateDate;
        this.statusName = statusName;
        this.statusId = statusId;
    }
}