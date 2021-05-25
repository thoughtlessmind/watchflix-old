import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css'],
})
export class PersonPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  personInfo:any = {}

  fetchPersonInfo(){
    const id = this.route.snapshot.paramMap.get('id') || 'id'
    this.personService.getPersonInfo(id).subscribe(data=> this.personInfo = data)
  }

  ngOnInit(): void {
    this.fetchPersonInfo()
  }
  
}
