import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';
import { destination } from 'src/app/destinations.model';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent implements OnInit {
  destinations: destination[];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    console.log(this.itemsService.destinations);
    this.destinations = this.itemsService.destinations;
  }
}
