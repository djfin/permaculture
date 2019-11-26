import { Controller, Get, Post, Body } from '@nestjs/common';
import { Project } from '@permaculture/data';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('projects')
  getData() {
    return this.appService.getData();
  }
  @Post('addProject/')
  addProject(@Body() project:Project) {
    console.log("in Controller, project =" + project);
    return this.appService.addProject(project);
  }
}