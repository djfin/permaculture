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

@NgModule({
  declarations: [AppComponent, ProjectDetailsComponent, ProjectsComponent, LoginComponent, NewUserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
