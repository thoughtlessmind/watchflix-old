import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowsService } from '../shows.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.css'],
})
export class SingleShowComponent implements OnInit {
  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute
  ) {}

  sectionBgCss = {
    'background-image': '',
  };
  showDetails: any = undefined;
  director: any = undefined;

  getShowYear(releaseDate: string) {
    return new Date(releaseDate).getFullYear();
  }

  getSingleShow() {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.showService.getSingleShowDetails(id).subscribe((data) => {
      console.log(data.credits.crew.map((i: any) => i.job));
      this.director = data.credits.crew.find((i: any) => i.job === 'Director');
      this.sectionBgCss = {
        'background-image': `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.images.backdrops[0].file_path})`,
      };
      this.showDetails = data;
    });
  }

  ngOnInit(): void {
    this.getSingleShow();
  }
}
