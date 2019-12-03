import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Project, User, GardenBed } from '@permaculture/data';
import { AppService } from './app.service';
import { userInfo } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getData(){
    return this.appService.getData();
  }
  @Post('addUser/')
  addUser(@Body() user:User){
    return this.appService.addUser(user);
  }

  @Get('users/user/')
  getUserData(@Query('user') user){
    return this.appService.getUserData(user);
  }

  @Get('login/')
  login(@Query('user') user, @Query('pass') pass) {
   return this.appService.login(user,pass);
  }

  @Get('getProject/')
  getProject(@Query('user') user, @Query('project') project){
    return this.appService.getProject(user,project);
  }
  @Post('addProject/')
  addProject(@Body('user') user:string, @Body('project') project:Project) {
    return this.appService.addProject(user,project);
  }
  @Get('getZone/')
  getZone(@Query('user') user, @Query('project') project, @Query('zone') zone){
    return this.appService.getZone(user, project, zone);
  }
  @Post('addGardenBed/')
  addGardenBed(@Body('user') user:string, @Body('project') project:string, @Body('zone') zone:string, @Body('bed') bed:GardenBed){
    return this.appService.addGardenBed(user, project, zone, bed);
  }
}