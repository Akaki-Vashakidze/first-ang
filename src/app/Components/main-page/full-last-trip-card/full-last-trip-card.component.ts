import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemsService } from 'src/app/items.service';
import { ZoomImageComponent } from './zoom-image/zoom-image.component';

@Component({
  selector: 'app-full-last-trip-card',
  templateUrl: './full-last-trip-card.component.html',
  styleUrls: ['./full-last-trip-card.component.css']
})
export class FullLastTripCardComponent implements OnInit {

   images:any;

  constructor(private dialogRef:MatDialog , private imagesService:ItemsService) { }

  imageZoom = (image) => {
    this.dialogRef.open(ZoomImageComponent)
    this.imagesService.setZoomImgLink(image.link)
  }

  ngOnInit(): void {
    this.images = this.imagesService.images;
  }

}
