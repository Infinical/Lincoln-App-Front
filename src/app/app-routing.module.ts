import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DashboardModule } from './pages/dashboard/dashboard.module';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "dashboard", loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
