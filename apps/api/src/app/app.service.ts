import { Injectable } from '@nestjs/common';
import { Project, User } from '@permaculture/data'


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
    this.users.push(user);
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
        u = e.user
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
        us = e.user
        us.projects.forEach(el=>{
          if(el.name==projectName){
            proj=el;
          }
        })
      }
    })
    return proj;
  }
}