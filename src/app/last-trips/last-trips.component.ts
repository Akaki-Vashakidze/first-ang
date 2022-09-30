import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullLastTripCardComponent } from '../full-last-trip-card/full-last-trip-card.component';
import { trip } from '../trips.model';

@Component({
  selector: 'app-last-trips',
  templateUrl: './last-trips.component.html',
  styleUrls: ['./last-trips.component.css']
})
export class LastTripsComponent implements OnInit {
  @Input() trip:trip;
  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  lastTripsClick = () => {
    this.dialogRef.open(FullLastTripCardComponent)
  }

}
