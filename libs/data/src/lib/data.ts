export class ToDo{
    name: string;
    dueDate:Date;
    complete:boolean;
    description:string;
}
export class Crop{
    name:string;
    description:string;
    todos:Array<ToDo>;
}
export class GardenBed{
    name:string;
    description:string;
    crops: Array<Crop>
}
export class Zone{
    name:string;
    description:string;
    beds:Array<GardenBed>
}
export class Activity{
    prompt: string;
    response:string;
    complete:boolean;
}
export class Principle{
    name:string;
    description:string;
    activities: Array<Activity>
}

export class Project {
    name: string;
    description:string;
    eduCourse: Array<Principle>;
    garden: Array<Zone>;

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
    }
  }