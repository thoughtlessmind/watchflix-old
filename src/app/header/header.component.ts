import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isElementOutViewport(el: HTMLElement): boolean {
    console.log('el-', el);
    var rect = el.getBoundingClientRect();
    return (
      rect.bottom < 0 ||
      rect.right < 0 ||
      rect.left > window.innerWidth ||
      rect.top > window.innerHeight
    );
  }

  logEl = () => {
    const searchBar = document.getElementById('search-box');
    console.log(searchBar);
    if (searchBar) {
      document.addEventListener('scroll', () =>
        console.log(this.isElementOutViewport(searchBar))
      );
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
