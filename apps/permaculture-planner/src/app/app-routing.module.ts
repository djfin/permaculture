import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent} from './project-details/project-details.component'
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import { PrincipleDetailsComponent } from './principle-details/principle-details.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
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
        path:'users/:user/projects',
        component: ProjectsComponent,
        
    },
    {
        path:'users/:user/projects/:project',
        component: ProjectDetailsComponent,
        pathMatch: 'full'
    },
    {
        path:'users/:user/projects/:project/garden/:zone',
        component:ZoneDetailsComponent,
        pathMatch:'full'
    },
    {
        path:'users/:user/projects/:project/eduCourse/:principle',
        component:PrincipleDetailsComponent,
        pathMatch:'full'
    },
    {
        path:'users/:user/projects/:project/eduCourse/:principle/activities/:activity',
        component: ActivityDetailsComponent,
        pathMatch:'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}