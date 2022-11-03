import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiclesModule} from "../../components/vehicles/vehicles.module";
import {VehiclesListComponent} from "./vehicles-list.component";



@NgModule({
  declarations: [VehiclesListComponent],
  imports: [
    CommonModule,
    VehiclesModule
  ]
})
export class VehiclesListModule { }
