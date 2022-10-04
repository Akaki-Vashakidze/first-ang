import { Component,Input, OnInit } from '@angular/core';
import { destination } from 'src/app/destinations.model';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.css']
})
export class DestinationCardComponent implements OnInit {
  @Input() destination : destination;
  constructor() { }

  ngOnInit(): void {
  }

}
