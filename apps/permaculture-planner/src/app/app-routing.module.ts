import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent} from './project-details/project-details.component'
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path:'newUser',
        component: NewUserComponent
    },
    {
        path:'projects/:user',
        component: ProjectsComponent,
        pathMatch: 'full'
    },
    {
        path:'detail/:name',
        component: ProjectDetailsComponent,
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}