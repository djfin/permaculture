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

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
        this.crops=new Array();
    }
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
        this.garden.push(new Zone("Zone 1", "The zone closest to home"));
        this.garden.push(new Zone("Zone 2", "The next zone"));
        this.garden.push(new Zone("Zone 3", "The next one"));
        this.garden.push(new Zone("Zone 4", "Another one "));
        this.garden.push(new Zone("Zone 5", "Yes"));

        this.eduCourse = new Array<Principle>();
        this.eduCourse.push(new Principle("Observe and Interact","Observe"));
        this.eduCourse.push(new Principle("Catch and Store Energy","Catch"));
        this.eduCourse.push(new Principle("Obtain a Yield","Yield"));
        this.eduCourse.push(new Principle("Self Regulate and Accept Feedback","Feedback"));
        this.eduCourse.push(new Principle("Use and Value Nature's Gifts","Nature"));
        this.eduCourse.push(new Principle("Make No Waste","Waste"));
        this.eduCourse.push(new Principle("Design from Patterns to Details","Patterns"));
        this.eduCourse.push(new Principle("Integrate rather than Segregate","Integrate"));
        this.eduCourse.push(new Principle("Choose Small and Slow Solutions","Slow"));
        this.eduCourse.push(new Principle("Cultivate Diversity","Diverse"));
        this.eduCourse.push(new Principle("Mind the Margins and Look to the Edges","Margins"));
        this.eduCourse.push(new Principle("Cultivate Vision and Respond to Change","Change"));
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