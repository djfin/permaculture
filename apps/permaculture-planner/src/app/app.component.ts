import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Project } from '@permaculture/data'


@Component({
  selector: 'permaculture-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'permaculture-planner';
  projects: Project[] = [];

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
