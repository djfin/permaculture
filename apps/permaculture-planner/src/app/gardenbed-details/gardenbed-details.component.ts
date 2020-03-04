import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { GardenBed } from '@permaculture/data';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'permaculture-gardenbed-details',
  templateUrl: './gardenbed-details.component.html',
  styleUrls: ['./gardenbed-details.component.css']
})
export class GardenbedDetailsComponent implements OnInit {
  @Input() userId:string;
  @Input() projectId:string;
  @Input() zoneName:string;
  @Input() gardenBedName: string;
  gardenBed$ : Observable<GardenBed>


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectId=this.activatedRoute.snapshot.paramMap.get('project');
    this.zoneName=this.activatedRoute.snapshot.paramMap.get('zone');
    this.gardenBedName=this.activatedRoute.snapshot.paramMap.get('gardenBed')
    this.gardenBedName = this.gardenBedName.trim()
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectId+'/garden/'+this.zoneName+'/beds/'+this.gardenBedName;
    this.gardenBed$ = this.http.get<GardenBed>(reqString);
    this.gardenBed$.forEach(element=>{
      console.log(element)
    })
  }

}
