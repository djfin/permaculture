import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { ZonesComponent } from './zones/zones.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProjectsComponent, ZonesComponent, ProjectDetailsComponent],
  exports: [ProjectsComponent, ZonesComponent, ProjectDetailsComponent, RouterModule]
})
export class UiModule {}
