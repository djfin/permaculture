import { Injectable } from '@nestjs/common';
import { Project } from '@permaculture/data'

@Injectable()
export class AppService {
  projects: Array<Project> = new Array;

  getData(): Array<Project> {
    return this.projects;
  }
  addProject(project:Project) {
    this.projects.push(project);
  }
}