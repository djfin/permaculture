import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Zone, Principle, Project } from '@permaculture/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'permaculture-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() username:string;
  @Input() projectName:string;
  private project$: Observable<Project>;
  zones:Array<Zone> = new Array();
  principles:Array<Principle>= new Array();

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fetch()
  }

  fetch(){
    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectName=this.activatedRoute.snapshot.paramMap.get('project');
    let params = new HttpParams()
    .set('user',this.username)
    .set('project',this.projectName)
    this.project$ = this.http.get<Project>('/api/getProject/',{params})
    this.project$.forEach(element=>{
      console.log(element);
    })
  }

}
