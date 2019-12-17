import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Principle } from '@permaculture/data';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'permaculture-principle-details',
  templateUrl: './principle-details.component.html',
  styleUrls: ['./principle-details.component.scss']
})
export class PrincipleDetailsComponent implements OnInit {

  @Input() userId:string;
  @Input() projectId:string;
  @Input() principleId:string;
  principle$:Observable<Principle>;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectId=this.activatedRoute.snapshot.paramMap.get('project');
    this.principleId=this.activatedRoute.snapshot.paramMap.get('principle');
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectId+'/eduCourse/'+this.principleId;
    this.principle$ = this.http.get<Principle>(reqString);
    this.principle$.forEach(element=>{
      console.log(element)
    })
  }

}
