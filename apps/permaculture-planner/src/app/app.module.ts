import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'apps/permaculture-planner/src/app/app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UiModule } from 'libs/ui/src/lib/ui.module';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import { PrincipleDetailsComponent } from './principle-details/principle-details.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { GardenbedDetailsComponent } from './gardenbed-details/gardenbed-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, ProjectDetailsComponent, ProjectsComponent, LoginComponent, NewUserComponent, ZoneDetailsComponent, PrincipleDetailsComponent, ActivityDetailsComponent, GardenbedDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
