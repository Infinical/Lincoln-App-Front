import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  headers: { name: string; }[];

  constructor() { }

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
