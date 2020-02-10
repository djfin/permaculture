import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Zone, GardenBed } from '@permaculture/data';

@Component({
  selector: 'permaculture-zone-details',
  templateUrl: './zone-details.component.html',
  styleUrls: ['./zone-details.component.scss']
})
export class ZoneDetailsComponent implements OnInit {
  @Input() userId:string;
  @Input() projectId:string;
  @Input() zoneName:string;
  zone$:Observable<Zone>;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.userId = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectId=this.activatedRoute.snapshot.paramMap.get('project');
    this.zoneName=this.activatedRoute.snapshot.paramMap.get('zone');
    let reqString = 'api/users/'+this.userId+'/projects/'+this.projectId+'/garden/'+this.zoneName;
    this.zone$ = this.http.get<Zone>(reqString);
    this.zone$.forEach(element=>{
      console.log(element)
    })
  }
  addGardenBed(bedName:string, bedDesc:string){
    const user = this.userId;
    const project = this.projectId;
    const zone = this.zoneName;
    const bed = new GardenBed(bedName, bedDesc);
    this.http.put('/api/users/'+user+'/projects/'+project+'/garden/'+zone+'/addGB/',bed).subscribe(()=>{
      this.fetch();
    });
  }

}
