import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';
import { trip } from 'src/app/trips.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  trips:trip[]
  constructor(private itemsService:ItemsService){}

  ngOnInit(): void {
    this.trips = this.itemsService.trips;
  }
}
