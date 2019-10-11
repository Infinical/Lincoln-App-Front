import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  headers = [];
  constructor() {}

  ngOnInit() {
    this.headers = [
      { name: "Name" },
      { name: "Title" },
      { name: "Timestamp" },
      { name: "Delete" },
      { name: "View" },
      { name: "Download" }
    ];
  }
}
