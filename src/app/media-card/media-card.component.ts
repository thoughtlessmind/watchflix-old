import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css'],
})
export class MediaCardComponent implements OnInit {
  @Input() bannerUrl: string = '';
  @Input() name: string = '';
  @Input() mediaType:string = '';
  @Input() id:string = '';

  constructor() {}

  ngOnInit(): void {}
}
