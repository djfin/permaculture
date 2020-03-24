import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '@permaculture/data';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'permaculture-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  @Input() userId:string;
  @Input() projectId:string;
  @Input() zoneName:string;
  @Input() gardenBedName: string;
  @Input() cropName:string;
  @Input() todoName:string;
  todo$: Observable<ToDo>;
  model;
  


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectId=this.activatedRoute.snapshot.paramMap.get('project');
    this.zoneName=this.activatedRoute.snapshot.paramMap.get('zone');
    this.gardenBedName=this.activatedRoute.snapshot.paramMap.get('gardenBed').trim()
    this.cropName = this.activatedRoute.snapshot.paramMap.get('crop').trim();
    this.todoName = this.activatedRoute.snapshot.paramMap.get('todo').trim();
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectId+'/garden/'+this.zoneName+'/beds/'+this.gardenBedName+'/crops/'+this.cropName+'/todos/'+this.todoName;
    this.todo$ = this.http.get<ToDo>(reqString);
    this.todo$.forEach(element=>{
      console.log(element)
    })
  }

}
