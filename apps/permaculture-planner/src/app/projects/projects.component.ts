import { Component, OnInit } from '@angular/core';
import { Project } from '@permaculture/data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'permaculture-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
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
