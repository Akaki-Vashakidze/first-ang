import { Component } from '@angular/core';
import { trip } from './trips.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-ang';
  trips:trip[] = 
  [
    {
    title:'hihihihi',
    img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description:'cool trip and we have some fun'
  },
  {
    title:'jijije',
    img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description:'cool trip and we have some funhb vjenf encwdknm'
  },
  {
    title:'kkk',
    img:'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description:'tgrfdo wnoef ejnfioo qwokp trip and we have some funhb vjenf encwdknm'
  },
  ]
  
}
