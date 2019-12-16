import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Project, Zone, Principle } from '@permaculture/data';
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

  addUser(username:String, password:String, email:String, firstName:String, lastName:String){
    var user = new User(username, password, email, firstName, lastName);
    var dummyProj = new Project("dummyProj","dummy");
    user.projects.push(dummyProj);
    var rep = this.http.post('/api/users/add',user);
    rep.forEach(element =>{
      console.log(element)
    });
    this.router.navigate(['']);
  }

}
