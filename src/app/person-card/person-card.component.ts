import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input() profilePic:string = ''
  @Input() name:string = ''
  @Input() character:string = ''
  @Input() id: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
