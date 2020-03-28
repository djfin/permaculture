import { Controller, Get, Post, Body, Param, Query, UseGuards, Req, Put, HttpException, HttpStatus } from '@nestjs/common';
import { Project, User, GardenBed } from '@permaculture/data';
import { AppService } from './app.service';
import { GardenBedInt, CropInt, ToDoInt } from 'libs/data/src/lib/data.interface';

@Controller()
export class AppController {
  constructor(private readonly appService:AppService) {}

  @Get('users')
  getData(){
    return this.appService.findAll();
  }
  @Post('users/add')
  async addUser(@Body() user:User){
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
  async addProject(@Param('userId') userId, @Body() projects,){
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
  @Get('users/:userId/projects/:projName/eduCourse/:principleId')
  async getPrinciple(@Param('userId') userId,@Param('projName') projName, @Param('principleId') principleId){
    return this.appService.getPrinciple(userId,projName,principleId);
  }
  @Get('users/:userId/projects/:projName/eduCourse/:principleId/activities/:activityId')
  async getActivity(@Param('userId') userId,@Param('projName') projName, @Param('principleId') principleId, @Param('activityId') activityId){
    return this.appService.getActivity(userId,projName,principleId,activityId);
  }
  @Put('users/:userId/projects/:projName/eduCourse/:principleId/activities/:activityId/update')
  async updateActivity(@Param('userId') userId,@Param('projName') projName, @Param('principleId') principleId, @Param('activityId') activityId, @Body() activityIn, ){
    return this.appService.updateActivity(userId,projName,principleId,activityId,activityIn)
  }
  @Put('users/:userId/projects/:projName/garden/:zoneId/addGB/')
  async addGardenBed(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Body() newBed:GardenBedInt){
    return this.appService.createGardenBed(userId,projName,zoneId,newBed)
  }
  @Get('users/:userId/projects/:projName/garden/:zoneId/beds/:gardenBedName')
  async getGardenBed(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Param('gardenBedName') gardenBedName) {
    return this.appService.getGardenBed(userId,projName,zoneId, gardenBedName);
  }
  @Put('users/:userId/projects/:projName/garden/:zoneId/beds/:gardenBedName/addCrop/')
  async addCrop(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Param('gardenBedName') gardenBedName, @Body() newCrop: CropInt){
    return this.appService.createCrop(userId,projName,zoneId,gardenBedName,newCrop)
  }
  @Get('users/:userId/projects/:projName/garden/:zoneId/beds/:gardenBedName/crops/:cropName')
  async getCrop(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Param('gardenBedName') gardenBedName, @Param('cropName') cropName) {
    return this.appService.getCrop(userId,projName,zoneId, gardenBedName, cropName);
  }
  @Put('users/:userId/projects/:projName/garden/:zoneId/beds/:gardenBedName/crops/:cropName/addToDo')
  async addTodo(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Param('gardenBedName') gardenBedName, @Param('cropName') cropName,@Body() newToDo: ToDoInt){
    return this.appService.createToDo(userId,projName,zoneId,gardenBedName,cropName, newToDo)
  }
  @Get('users/:userId/projects/:projName/garden/:zoneId/beds/:gardenBedName/crops/:cropName/todos/:todoName')
  async getToDo(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Param('gardenBedName') gardenBedName, @Param('cropName') cropName, @Param('todoName') todoName) {
    return this.appService.getTodo(userId,projName,zoneId, gardenBedName, cropName, todoName);
  }
  @Put('users/:userId/projects/:projName/garden/:zoneId/beds/:gardenBedName/crops/:cropName/todos/:todoName/complete')
  async toggleComplete(@Param('userId') userId,@Param('projName') projName, @Param('zoneId') zoneId, @Param('gardenBedName') gardenBedName, @Param('cropName') cropName, @Param('todoName') todoName) {
    return this.appService.toggleCompleteToDo(userId,projName,zoneId, gardenBedName, cropName, todoName);
  }
}