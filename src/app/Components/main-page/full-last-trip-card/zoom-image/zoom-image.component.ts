import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-zoom-image',
  templateUrl: './zoom-image.component.html',
  styleUrls: ['./zoom-image.component.css']
})
export class ZoomImageComponent implements OnInit {

  zoomImgLink:string;
  constructor(private zoomService:ItemsService) { }

  ngOnInit(): void {
   this.zoomImgLink = this.zoomService.zoomImgLink;
  }

}
