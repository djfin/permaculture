import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { Project, User } from '@permaculture/data';
import { AppService } from './app.service';
import { userInfo } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get('users')
  getData(){
    return this.appService.getData();
  }*/

  @Get('users/')
  getUserData(@Query() user){
    return this.appService.getUserData(user);
  }

  @Get('login/')
  login(@Query('user') user, @Query('pass') pass) {
   return this.appService.login(user,pass);
  }
  /*@Post('updateUser/')
  updateUser(@Body() user:User) {
    console.log("in Controller, user =" + user);
    return this.appService.updateUser(user);
  }*/
  @Post('addUser/')
  addUser(@Body() user:User){
    return this.appService.addUser(user);
  }
}