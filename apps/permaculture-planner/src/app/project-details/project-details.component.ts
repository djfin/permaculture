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
  @Input() userId:string;
  @Input() projectName:string;
  private project$: Observable<Project>;
  zones:Array<Zone> = new Array();
  principles:Array<Principle>= new Array();

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fetch()
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectName=this.activatedRoute.snapshot.paramMap.get('project');
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectName;
    this.project$ = this.http.get<Project>(reqString)
    this.project$.forEach(element=>{
      console.log(element);
    })
  }

}
