import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Project } from '@permaculture/data';
import { Router } from '@angular/router';

@Component({
  selector: 'permaculture-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  }

  addUser(username:string, password:string, email:string, firstName:string, lastName:string){
    var user = new User(username, password, email, firstName, lastName);
    var dummyProj = new Project("dummyProj","dummy");
    user.projects.push(dummyProj);
    var rep = this.http.post('/api/addUser/',{user});
    rep.forEach(element =>{
      console.log(element)
    });
    this.router.navigate(['']);
  }

}
