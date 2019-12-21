import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInt, ProjectInt, ActivityInt } from 'libs/data/src/lib/data.interface';
import { User, Project, Activity } from 'libs/data/src/lib/data';



@Injectable()
export class AppService {
  users: Array<any>= new Array();
  constructor(@InjectModel('User') private readonly userModel: Model<UserInt>){}

  async createUser(user:User): Promise<UserInt>{
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }
  
  async findAll():Promise<UserInt[]>{
    return await this.userModel.find().exec()
  } 

  async findUserById(userID:String){
    return this.userModel.findById(userID);
  }
  
  async findUserByUsername(user:String): Promise<UserInt>{
    return this.userModel.findOne({username:user});
  }
  async findUserByCredentials(user:String,pass:String):Promise<UserInt>{
      return this.userModel.findOne({username:user,password:pass});
  }

  async deleteUser(userId:String){
      return this.userModel.findByIdAndDelete(userId);
  }

  async updateProjectArray(userId:String,projs:Array<Project>){
      return this.userModel.findByIdAndUpdate(userId,{ projects: projs}).update();
  }

  async getProject(userId:String,projId:String){
    const user = await this.userModel.findById(userId);
    const projectID = +projId;
    const project = user.projects[projectID];
    return await project;
  }

  async getZone(userId:String, projId:String,zoneId:String){
    const user = await this.userModel.findById(userId);
    const projectID = +projId;
    const project = user.projects[projectID];
    const zoneID = +zoneId;
    const zone = project.garden[zoneID-1];
    return await zone;
  }

  async getPrinciple(userId:String,projId:String,principleId){
    const user = await this.userModel.findById(userId);
    const projectID = +projId;
    const project = user.projects[projectID];
    const principleID = +principleId;
    const principle = project.eduCourse[principleID];
    return await principle;
  }

  async getActivity(userId:String, projId:String, principleId:String,activityId:String){
    const user = await this.userModel.findById(userId);
    const projectID = +projId;
    const project = user.projects[projectID];
    const principleID = +principleId;
    const principle = project.eduCourse[principleID];
    const activityID= +activityId;
    const activity = principle.activities[activityID];
    return await activity;
  }

  async updateActivity(userId:String, projId:String, principleId:String,activityId:String, activityIn:Activity){
    const user = await this.userModel.findById(userId);
    const projectID = +projId;
    const project = user.projects[projectID];
    const principleID = +principleId;
    const principle = project.eduCourse[principleID];
    const activityID= +activityId;
    const currentAct : ActivityInt = principle.activities[activityID];
    const newAct = {...currentAct, response: activityIn.response, complete: activityIn.complete};
    user.projects[projectID].eduCourse[principleID].activities[activityID]=newAct;
    return this.userModel.findByIdAndUpdate(userId,{projects: user.projects})
    
  }
}