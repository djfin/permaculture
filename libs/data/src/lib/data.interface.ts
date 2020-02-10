import { Document } from 'mongoose';

export interface ToDoInt {
    readonly name: string;
    readonly dueDate:Date;
    readonly complete:boolean;
    readonly description:string;
}
export interface CropInt {
    readonly name:string;
    readonly description:string;
    readonly todos:Array<ToDoInt>;
}
export interface GardenBedInt {
    readonly name:string;
    readonly description:string;
    readonly crops: Array<CropInt>
}
export interface ZoneInt {
    readonly id:number,
    readonly name:string;
    readonly description:string;
    readonly beds:Array<GardenBedInt>
}
export interface ActivityInt{
    readonly id:number;
    readonly prompt: string;
    response:string;
    complete:boolean;
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