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
  @Input() username:string;
  @Input() projectName:string;
  @Input() zoneName:string;
  zone$:Observable<Zone>;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router:Router) { }

  ngOnInit() {
    this.fetch();
  }

  fetch(){
    this.username = this.activatedRoute.snapshot.paramMap.get('user');
    this.projectName=this.activatedRoute.snapshot.paramMap.get('project');
    this.zoneName=this.activatedRoute.snapshot.paramMap.get('zone');
    let params = new HttpParams()
    .set('user',this.username)
    .set('project',this.projectName)
    .set('zone',this.zoneName)
    this.zone$ = this.http.get<Zone>('/api/getZone',{params});
    this.zone$.forEach(element=>{
      console.log(element)
    })
  }
  addGardenBed(bedName:string, bedDesc:string){
    const user = this.username;
    const project = this.projectName;
    const zone = this.zoneName;
    const bed = new GardenBed(bedName, bedDesc);
    this.http.post('/api/addGardenBed/',{user, project, zone, bed}).subscribe(()=>{
      this.fetch;
    });
  }

}
