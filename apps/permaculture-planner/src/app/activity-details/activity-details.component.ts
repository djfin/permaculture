import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Activity } from '@permaculture/data';

@Component({
  selector: 'permaculture-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {
  @Input() userId:string;
  @Input() projectName:string;
  @Input() principleName:string;
  @Input() activityId:string;
  activity$:Observable<Activity>;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectName=this.activatedRoute.snapshot.paramMap.get('project');
    this.principleName=this.activatedRoute.snapshot.paramMap.get('principle');
    this.activityId= this.activatedRoute.snapshot.paramMap.get('activity');
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectName+'/eduCourse/'+this.principleName+'/activities/'+this.activityId;
    this.activity$ = this.http.get<Activity>(reqString);
    this.activity$.forEach(element=>{
      console.log(element)
    })
  }
 }