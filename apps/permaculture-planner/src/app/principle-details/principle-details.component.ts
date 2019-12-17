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
  @Input() projectName:string;
  @Input() principleName:string;
  principle$:Observable<Principle>;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectName=this.activatedRoute.snapshot.paramMap.get('project');
    this.principleName=this.activatedRoute.snapshot.paramMap.get('principle');
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectName+'/eduCourse/'+this.principleName;
    this.principle$ = this.http.get<Principle>(reqString);
    this.principle$.forEach(element=>{
      console.log(element)
    })
  }

}
