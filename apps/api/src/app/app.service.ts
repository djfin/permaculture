import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInt, ProjectInt } from 'libs/data/src/lib/data.interface';
import { User, Project } from 'libs/data/src/lib/data';



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
    const project = user.projects.find(proj=>proj.name==projId);
    return await project;
  }

  async getZone(userId:String, projName:String,zoneId:String){
    const user = await this.userModel.findById(userId);
    const project = user.projects.find(proj=>proj.name==projName);
    const zoneID = new Number(zoneId).valueOf();
    const zone = project.garden[zoneID-1];
    return await zone;
  }

  async getPrinciple(userId:String,projName:String,principleName){
    const user = await this.userModel.findById(userId);
    const project = user.projects.find(proj=>proj.name==projName);
    const principle = project.eduCourse.find(prin=>prin.name==principleName);
    return await principle;
  }
}