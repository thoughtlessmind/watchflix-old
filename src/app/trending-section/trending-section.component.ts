import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.css'],
})
export class TrendingSectionComponent implements OnInit {
  trendingShows: any = [];

  constructor(private trendingService: TrendingService) {}

  getTrending(): void {
    this.trendingService
      .getTrendings()
      .subscribe((data) => (this.trendingShows = data.results));
  }

  manageScrollButtons(): void {
    if(window.innerWidth < 600){
      return
    }
    const el: HTMLElement | null = document.getElementById('scrollContainer');
    const rightButtonEl = document.getElementById('rightScroll');
    const lefttButtonEl = document.getElementById('leftScroll');
    const leftPos: number = el?.scrollLeft || 0;
    const elWidth: number = el?.getBoundingClientRect()?.width || 0;


    if (leftPos > 0) {
      lefttButtonEl?.classList.remove('hide');
    } else {
      lefttButtonEl?.classList.add('hide');
    }

    if (leftPos >= elWidth * 2) {
      rightButtonEl?.classList.add('hide');
    } else {
      rightButtonEl?.classList.remove('hide');
    }
  }

  scrollRight(direction: string): void {
    const el: HTMLElement | null = document.getElementById('scrollContainer');
    if (direction === 'left') {
      el?.scroll({
        left: el.scrollLeft - 180,
        behavior: 'smooth',
      });
    } else {
      el?.scroll({
        left: el.scrollLeft + 180,
        behavior: 'smooth',
      });
    }
  }

  ngOnInit() {
    this.getTrending();
  }
}
