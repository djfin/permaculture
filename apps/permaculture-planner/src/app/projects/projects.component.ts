import { Component, OnInit, Input } from '@angular/core';
import { Project, User } from '@permaculture/data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'permaculture-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() userID:string;
  private user$:Observable<User>;
  projects: Project[] = [];

  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {
  }
  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.userID = this.activatedRoute.snapshot.paramMap.get('user');
    let reqString = 'api/users/'+this.userID;
    this.user$ = this.http.get<User>(reqString);
    this.user$.forEach(user=>{
      console.log(user)
      this.projects = user.projects;
    })
  }
  addProject(name:string, description:string) {
    let newProject =new Project(name,description);
    this.projects.push(newProject);
    const projects = this.projects;
    let reqString = 'api/users/'+this.userID+'/projects/add';
    this.http.put(reqString, projects)
    .subscribe(() => {
      this.fetch();
    });
  }
}
