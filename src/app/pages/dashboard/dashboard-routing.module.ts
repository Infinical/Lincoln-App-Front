import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { ProjectsComponent } from "./projects/projects.component";
import { UserComponent } from "./user/user.component";
import { ProjectDetailsComponent } from "./projects/project-details/project-details.component";
import { RecomDetailsComponent } from './recommendations/recom-details/recom-details.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "recommendations", component: RecommendationsComponent },

      { path: "projects", component: ProjectsComponent },
      { path: "project-details", component: ProjectDetailsComponent },
      { path: "recom-details", component: RecomDetailsComponent },
      { path: "users", component: UserComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
