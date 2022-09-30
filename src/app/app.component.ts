import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { trip } from './trips.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-ang';
  trips:trip[]
  constructor(private tripsService:ItemsService){}

  ngOnInit(): void {
    this.trips = this.tripsService.trips;
  }
}
