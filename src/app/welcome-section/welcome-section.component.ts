import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css'],
})
export class WelcomeSectionComponent implements OnInit {
  suggestions$!: Observable<any[]>;

  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) {}

  searchSuggestions(term: string): void {
    console.log('asdfas', term)
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.suggestions$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchService.searchSuggestions(term))
    );
  }
}
