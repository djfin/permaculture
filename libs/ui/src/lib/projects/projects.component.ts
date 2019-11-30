import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Project } from '@permaculture/data'


@Component({
  selector: 'permaculture-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  title = 'permaculture-planner';
  @Input() projects: Project[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Project[]>('/api/projects').subscribe(p => (this.projects = p));
  }
  addProject(name:string, description:string) {
    this.http.post('/api/addProject/', {name,description},).subscribe(() => {
      this.fetch();
    });
  }
}

