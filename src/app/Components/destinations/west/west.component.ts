import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';
import { destination } from 'src/app/destinations.model';

@Component({
  selector: 'app-west',
  templateUrl: './west.component.html',
  styleUrls: ['./west.component.css'],
})
export class WestComponent implements OnInit {
  destinations: destination[];
  westDestinations: destination[];
  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.destinations = this.itemsService.destinations;
    this.westDestinations = this.destinations.filter((item) => {
      return item.side == 'West Georgia';
    });
  }
}
