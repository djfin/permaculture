import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent} from './project-details/project-details.component'
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
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