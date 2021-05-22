import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.css'],
})
export class TrendingSectionComponent implements OnInit {
  trendingShows:any = [];

  constructor(private trendingService: TrendingService) {}

  getTrending(): void {
    this.trendingService
      .getTrendings()
      .subscribe((data) => this.trendingShows = data.results);
  }

  ngOnInit() {
    this.getTrending()
  }
}
