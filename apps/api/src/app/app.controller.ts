import { Controller, Get, Post, Body, Param, Query, UseGuards, Req, Put } from '@nestjs/common';
import { Project, User, GardenBed } from '@permaculture/data';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService:AppService) {}

  @Get('users')
  getData(){
    return this.appService.findAll();
  }
  @Post('users/add')
  async addUser(@Body() user:User){
    console.log('USER HERE::::::', user);
    return await this.appService.createUser(user);
  }
  @Get('login/')
  async login(@Query('user') user, @Query('pass') pass){
    return this.appService.findUserByCredentials(user,pass)
  }
  @Get('users/:userId')
  async getUser(@Param('userId') userID){
    return this.appService.findUserById(userID);
  }
  @Put('users/delete/:userId')
  async deleteUser(@Param('userId') userID){
    return this.appService.deleteUser(userID);
  }

  @Put('users/:userId/projects/add/')
  async addProject(@Param('userId') userId, @Body() projects){
    return this.appService.updateProjectArray(userId,projects);
  }
  @Get('users/:userId/projects/:projectId')
  async getProject(@Param('userId') userId, @Param('projectId') projectId){
    return this.appService.getProject(userId,projectId);
  }
  @Put('users/:userId/projects/delete/')
  async deleteProject(@Param('userId') userId, @Body() projects){
    return this.appService.updateProjectArray(userId,projects);
  }

  @Get('users/:userId/projects/:projName/garden/:zoneId')
  async getZone(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId){
    return this.appService.getZone(userId,projName,zoneId);
  }
  @Get('users/:userId/projects/:projName/eduCourse/:principleName')
  async getPrinciple(@Param('userId') userId,@Param('projName') projName, @Param('principleName') principleName){
    return this.appService.getPrinciple(userId,projName,principleName);
  }
}