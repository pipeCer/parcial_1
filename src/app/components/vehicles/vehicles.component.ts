import { Component, OnInit } from '@angular/core';
import {Vehicle} from "../../Interfaces/vehicle";
import {VehiclesListService} from "../../services/vehicles-list.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Vehicle.Request[] = [];
  constructor(private vehiclesService: VehiclesListService) {
    this.retrieveVehicles();
  }

  ngOnInit(): void {
  }
  retrieveVehicles(): void {
    this.vehiclesService.getVehicles().subscribe((data: Vehicle.Request[]) => {
      this.vehicles = data;
    })
  }
}
