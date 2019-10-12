import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClrIconModule } from '@clr/angular';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { RecomDetailsComponent } from './recommendations/recom-details/recom-details.component';



@NgModule({
    imports: [DashboardRoutingModule,CommonModule,ClrIconModule],
    declarations: [DashboardComponent, RecommendationsComponent, ProjectsComponent, UserComponent, ProjectDetailsComponent, RecomDetailsComponent]
})

export class DashboardModule {}