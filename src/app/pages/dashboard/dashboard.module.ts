import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ProjectsComponent } from './projects/projects.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClrIconModule } from '@clr/angular';



@NgModule({
    imports: [DashboardRoutingModule,CommonModule,ClrIconModule],
    declarations: [DashboardComponent, RecommendationsComponent, ProjectsComponent, UserComponent]
})

export class DashboardModule {}