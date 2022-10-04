import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private itemsService:ItemsService) { }

  ngOnInit(): void {
    console.log(this.itemsService.loggedIn)
  }

}
