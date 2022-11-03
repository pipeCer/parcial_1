import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';



@NgModule({
  declarations: [
    VehiclesComponent
  ],
  exports: [
    VehiclesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehiclesModule { }
