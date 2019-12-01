import { Component, OnInit, Input } from '@angular/core';
import { Project, User } from '@permaculture/data';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'permaculture-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() user:User;

  projects: Project[] = [];

  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {
  }
  ngOnInit() {
    this.fetch();
  }

  fetch() {
    const test = this.activatedRoute.snapshot.paramMap.get('user')
    console.log(test);
  }
  addProject(name:string, description:string) {
    this.http.post('/api/addProject/', {name,description},).subscribe(() => {
      this.fetch();
    });
  }
}
