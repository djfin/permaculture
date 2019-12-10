import { Injectable } from '@nestjs/common';
import { Project, User, GardenBed } from '@permaculture/data'


class tester{
  username:string;
  password:string;
  constructor(username:string, password:string){
    this.username=username;
    this.password=password;
  }
}
class userWrapper{
  user:User;
}


@Injectable()
export class AppService {
  users: Array<any>= new Array();

  getData(){
    return this.users;
  }

  login(username:string,password:string){
    var user;
    this.users.forEach(element=>{
      var e = element as userWrapper;
      if(e.user.username==username && e.user.password==password){
        user = e.user
      }
    })
    return user;
  }
  addUser(user:User){
    return this.users.push(user);
  }

  getUserData(username:string) {
    var user;
    this.users.forEach(element=>{
      var e = element as userWrapper;
      if(e.user.username==username){
        user = e.user
      }
    })
    return user;
  }
  addProject(username:string, project:Project){
    var u;
    this.users.forEach(element=>{
      var e = element as userWrapper;
      if(e.user.username==username){
        u = e.user;
      }
    })
    return u.projects.push(project);
  }
  getProject(username:string,projectName:string){
    var us;
    var proj;
    this.users.forEach(element=>{
      var e = element as userWrapper;
      if(e.user.username==username){
        us = e.user;
        us.projects.forEach(el=>{
          if(el.name==projectName){
            proj=el;
          }
        })
      }
    })
    return proj;
  }
  getZone(username:string,projectName:string, zoneName:string){
    var us;
    var zone;
    this.users.forEach(element=>{
      var e = element as userWrapper;
      if(e.user.username==username){
        us = e.user
        us.projects.forEach(el=>{
          if(el.name==projectName){
            el.garden.forEach(z=>{
              if(z.name==zoneName){
                zone=z;
              }
            })
          }
        })
      }
    })
    return zone;
  }
  addGardenBed(username:string, projectName:string, zoneName:string, gardenbed:GardenBed){
    var us;
    var zone;
    this.users.forEach(element=>{
      var e = element as userWrapper;
      if(e.user.username==username){
        us = e.user
        us.projects.forEach(el=>{
          if(el.name==projectName){
            el.garden.forEach(z=>{
              if(z.name==zoneName){
                z.beds.push(gardenbed);
                zone=z;
              }
            })
          }
        })
      }
    })
    return zone;
  }
}