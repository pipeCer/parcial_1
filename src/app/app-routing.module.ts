import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehiclesListComponent} from "./views/vehicles-list/vehicles-list.component";

const routes: Routes = [
  {path: '', component: VehiclesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
