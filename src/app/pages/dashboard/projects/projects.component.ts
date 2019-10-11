import { Component, OnInit } from "@angular/core";
import { ProjectsService } from 'src/app/services/projects/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  headers = [];
  projects: []
  constructor(private projectService: ProjectsService,private router: Router) {}

  ngOnInit() {
    this.headers = [
      { name: "Name" },
      { name: "Title" },
      { name: "Timestamp" },
      { name: "Delete" },
      { name: "View" },
      { name: "Download" }
    ];

    this.fetchProjects()
  }

  fetchProjects(){
    this.projectService.getProjects().subscribe((response:any) => {
      console.log(response)
      this.projects = response
    })
  }

  viewProjectDetail(value){
    this.projectService.selectedProject = value
    // console.log(value) 
    this.router.navigate(['dashboard/project-details'])
  }
}
