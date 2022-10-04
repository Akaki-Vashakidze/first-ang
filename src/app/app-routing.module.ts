import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './Components/destinations/destinations.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { EastComponent } from './Components/destinations/east/east.component';
import { WestComponent } from './Components/destinations/west/west.component';

const routes: Routes = [
  {path: 'destinations', component:DestinationsComponent},
  {path: 'main', component:MainPageComponent},
  {path: 'destinations/east' , component:EastComponent},
  {path: 'destinations/west' , component:WestComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent,DestinationsComponent]