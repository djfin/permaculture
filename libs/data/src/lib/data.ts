import { deepEqual } from 'assert';
import { ThrowStmt } from '@angular/compiler';

export class ToDo{
    readonly name: string;
    readonly dueDate:Date;
    readonly complete:boolean;
    readonly description:string;
}
export class Crop{
    readonly name:string;
    readonly description:string;
    readonly todos:Array<ToDo>;
}
export class GardenBed{
    readonly name:string;
    readonly description:string;
    readonly crops: Array<Crop>

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
        this.crops=new Array();
    }
}
export class Zone{
    readonly id:number;
    readonly name:string;
    readonly description:string;
    readonly beds:Array<GardenBed>

    constructor(id:number,name:string, description:string){
        this.id=id;
        this.name=name;
        this.description=description;
        this.beds=new Array();
    }
}
export class Activity{
    readonly prompt: string;
    readonly response:string;
    readonly complete:boolean;
}
export class Principle{
    readonly name:string;
    readonly description:string;
    readonly activities: Array<Activity>

    constructor(name:string, description:string){
        this.name=name;
        this.description=description;
        this.activities=new Array();
    }
}

export class Project {
    readonly name: string;
    readonly description:string;
    readonly eduCourse: Array<Principle>;
    readonly garden: Array<Zone>;

    constructor(name:string, description:string){
        this.name =name;
        this.description=description;
        this.garden = new Array<Zone>();
        this.garden.push(new Zone(1,"Zone 1", "The zone closest to home"));
        this.garden.push(new Zone(2,"Zone 2", "The next zone"));
        this.garden.push(new Zone(3,"Zone 3", "The next one"));
        this.garden.push(new Zone(4,"Zone 4", "Another one "));
        this.garden.push(new Zone(5,"Zone 5", "Yes"));

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
      //readonly _id:String;
      readonly username:String;
      readonly password:String;
      readonly email:String;
      readonly firstName:String;
      readonly lastName:String;
      readonly projects: Array<Project>;

      constructor(username:String, password:String, email:String, firstName:String, lastName:String){
          this.username=username;
          this.password=password;
          this.email=email;
          this.firstName=firstName;
          this.lastName=lastName;
          this.projects = new Array<Project>();
      }

  }