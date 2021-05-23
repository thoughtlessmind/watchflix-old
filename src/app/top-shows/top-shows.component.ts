import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-top-shows',
  templateUrl: './top-shows.component.html',
  styleUrls: ['./top-shows.component.css'],
})
export class TopShowsComponent implements OnInit {
  trendingShows:any = [];
  page: number = 1;

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.showsService
      .trendingShows()
      .subscribe((data) => (this.trendingShows = data.results));
  }
}
