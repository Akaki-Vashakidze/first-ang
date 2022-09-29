import { Component, Input, OnInit } from '@angular/core';
import { trip } from '../trips.model';

@Component({
  selector: 'app-last-trips',
  templateUrl: './last-trips.component.html',
  styleUrls: ['./last-trips.component.css']
})
export class LastTripsComponent implements OnInit {
  @Input() trip:trip;
  constructor() { }

  ngOnInit(): void {
  }

  lastTripsClick = () => {
    console.log('gfd')
  }

}
