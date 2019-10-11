import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { RecommendationsComponent } from "./recommendations/recommendations.component";
import { ProjectsComponent } from "./projects/projects.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "recommendations", component: RecommendationsComponent },

      { path: "projects", component: ProjectsComponent },
      { path: "users", component: UserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
