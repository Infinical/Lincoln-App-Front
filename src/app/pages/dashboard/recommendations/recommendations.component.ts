import { Component, OnInit } from "@angular/core";
import { RecommendationsService } from "src/app/services/recommendations/recommendations.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-recommendations",
  templateUrl: "./recommendations.component.html",
  styleUrls: ["./recommendations.component.css"]
})
export class RecommendationsComponent implements OnInit {
  recommendations: any;
  constructor(private recommendationService: RecommendationsService,private router: Router) {}

  ngOnInit() {
    this.recommendationService.getRecommendations().subscribe((response : any) => {
      console.log(response);

      this.recommendations = response
    });
  }

  viewDetails(value){
    this.router.navigate(["dashboard/recom-details"])
  }
}
