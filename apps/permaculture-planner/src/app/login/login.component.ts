import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '@permaculture/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'permaculture-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit() {
  }
  login(username:string, password:string){
    var user = username.trim();
    var pass = password.trim();
    let params = new HttpParams()
    .set('user',user)
    .set('pass',pass)
    var rep = this.http.get<User>('api/login/',{params});
    rep.subscribe(val=>{
      if(val!=null){
        this.router.navigate(['users/',val.username.trim(),'projects'])
      }
    });
  }
}
