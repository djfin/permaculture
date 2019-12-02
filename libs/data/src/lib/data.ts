import { deepEqual } from 'assert';
import { ThrowStmt } from '@angular/compiler';

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

    constructor(name:string, description:string){
        this.name=name;
        this.description=description;
        this.beds=new Array();
    }
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

    constructor(name:string, description:string){
        this.name=name;
        this.description=description;
        this.activities=new Array();
    }
}

export class Project {
    name: string;
    description:string;
    eduCourse: Array<Principle>;
    garden: Array<Zone>;

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
        this.garden = new Array<Zone>();
        this.eduCourse = new Array<Principle>();
    }
  }
  export class User {
      username:string;
      password:string;
      email:string;
      firstName:string;
      lastName:string;
      projects: Array<Project>;

      constructor(username:string, password:string, email:string, firstName:string, lastName:string){
          this.username=username;
          this.password=password;
          this.email=email;
          this.firstName=firstName;
          this.lastName=lastName;
          this.projects = new Array<Project>();
      }

  }