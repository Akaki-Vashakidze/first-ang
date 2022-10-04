import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';
import { destination } from 'src/app/destinations.model';
import { DestinationCardComponent } from './destination-card/destination-card.component';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent implements OnInit {
  destinations: destination[];
  filteredDestinations:destination[];
  searchValue:string = '';

  constructor(private itemsService: ItemsService) {}

  onKeyUp(event:any) {
    this.destinations = this.itemsService.destinations;
    this.searchValue = event.target.value;
    this.destinations = this.destinations.filter((item) => {
      return item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    })
  }

  ngOnInit(): void {
    this.destinations = this.itemsService.destinations;
  }
}
