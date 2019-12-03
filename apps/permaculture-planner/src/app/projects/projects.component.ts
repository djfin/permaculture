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
  @Input() username:string;
  private user$:Observable<User>;
  projects: Project[] = [];

  constructor(private http: HttpClient, private activatedRoute:ActivatedRoute) {
  }
  ngOnInit() {
    this.fetch();
  }

  fetch() {
    //console.log(this.activatedRoute.snapshot.paramMap.get('user'));
    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    let params = new HttpParams()
    .set('user',this.username)
    this.user$ = this.http.get<User>('/api/users/user/',{params})
    this.user$.forEach(user=>{
      console.log(user)
    })
    /*const test = this.activatedRoute.snapshot.paramMap.get('user')
    console.log(test);*/
  }
  addProject(name:string, description:string) {
    var project =new Project(name,description);
    const user=this.username
    this.http.post('api/addProject/', {user,project},).subscribe(() => {
      this.fetch();
    });
  }
}
