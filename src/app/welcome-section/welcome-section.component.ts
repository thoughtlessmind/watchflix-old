import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { SearchService } from '../search.service';

interface SearchResult {
  page:number,
  results:Array<{}>,
  total_pages:number,
  total_results:number
}

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css'],
})
export class WelcomeSectionComponent implements OnInit {
  suggestions$!: Observable<SearchResult>;
  results:any = []

  private searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private vpScroller: ViewportScroller
  ) {}

  searchSuggestions(term: string): void {
    this.searchTerms.next(term);
  }

  searchInputFocued(): void {
    this.vpScroller.scrollToPosition([0, 0]);
  }

  getYear(releaseDate: string) {
    return releaseDate ? new Date(releaseDate).getFullYear() : '';
  }


  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchSuggestions(term))
    ).subscribe(data=> this.results = data.results);

    console.log(this.suggestions$)
  }
}

