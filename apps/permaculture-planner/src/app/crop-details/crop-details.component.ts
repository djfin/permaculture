import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GardenBed, Crop, ToDo } from '@permaculture/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'permaculture-crop-details',
  templateUrl: './crop-details.component.html',
  styleUrls: ['./crop-details.component.css']
})
export class CropDetailsComponent implements OnInit {

  @Input() userId:string;
  @Input() projectId:string;
  @Input() zoneName:string;
  @Input() gardenBedName: string;
  @Input() cropName:string
  crop$: Observable<Crop>;
  model;
  


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
    this.cropName = this.activatedRoute.snapshot.paramMap.get('crop');
    this.cropName = this.cropName.trim();
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectId+'/garden/'+this.zoneName+'/beds/'+this.gardenBedName+'/crops/'+this.cropName;
    this.crop$ = this.http.get<Crop>(reqString);
    this.crop$.forEach(element=>{
      console.log(element)
    })
  }

  addToDo(taskName:string, taskDesc:string, dateDue: Date){
    const user = this.userId;
    const project = this.projectId;
    const zone = this.zoneName;
    const gardenBed = this.gardenBedName;
    const crop = this.cropName;
    const toDo = new ToDo(taskName,taskDesc,dateDue);
    this.http.put('/api/users/'+user+'/projects/'+project+'/garden/'+zone+'/beds/'+gardenBed+'/crops/'+crop+'/addToDo',toDo).subscribe(()=>{
      this.fetch();
    });
  }

}
