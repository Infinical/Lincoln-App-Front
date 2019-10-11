import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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
