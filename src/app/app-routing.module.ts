import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './Components/destinations/destinations.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

const routes: Routes = [
  {path: 'destinations', component:DestinationsComponent},
  {path: 'main', component:MainPageComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent,DestinationsComponent]