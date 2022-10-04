import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';
import { destination } from 'src/app/destinations.model';

@Component({
  selector: 'app-east',
  templateUrl: './east.component.html',
  styleUrls: ['./east.component.css'],
})
export class EastComponent implements OnInit {
  destinations: destination[];
  eastDestinations: destination[];
  constructor(private ItemsService: ItemsService) {}

  ngOnInit(): void {
    this.destinations = this.ItemsService.destinations;
    this.eastDestinations = this.destinations.filter((item) => {
      return item.side == 'East Georgia';
    });
  }
}
