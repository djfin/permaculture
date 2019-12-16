import { Document } from 'mongoose';

export interface ToDoInt extends Document{
    readonly name: string;
    readonly dueDate:Date;
    readonly complete:boolean;
    readonly description:string;
}
export interface CropInt extends Document{
    readonly name:string;
    readonly description:string;
    readonly todos:Array<ToDoInt>;
}
export interface GardenBedInt extends Document{
    readonly name:string;
    readonly description:string;
    readonly crops: Array<CropInt>
}
export interface ZoneInt extends Document{
    readonly name:string;
    readonly description:string;
    readonly beds:Array<GardenBedInt>
}
export interface ActivityInt extends Document{
    readonly prompt: string;
    readonly response:string;
    readonly complete:boolean;
}
export interface PrincipleInt extends Document{
    readonly name:string;
    readonly description:string;
    readonly activities: Array<ActivityInt>
}

export interface ProjectInt extends Document {
    readonly name: string;
    readonly description:string;
    readonly eduCourse: Array<PrincipleInt>;
    readonly garden: Array<ZoneInt>;
  }
  export interface UserInt extends Document{
      readonly username:string;
      readonly password:string;
      readonly email:string;
      readonly firstName:string;
      readonly lastName:string;
      readonly projects: Array<ProjectInt>;

  }