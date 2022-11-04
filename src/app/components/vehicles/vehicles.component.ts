import {Component, OnInit} from '@angular/core';
import {Vehicle} from "../../Interfaces/vehicle";
import {VehiclesListService} from "../../services/vehicles-list.service";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  public vehicles: Vehicle.Request[] = [];
  public totalBrands: (string)[] = [];

  constructor(private vehiclesService: VehiclesListService) {
    this.retrieveVehicles();
  }

  ngOnInit(): void {
  }

  retrieveVehicles(): void {
    this.vehiclesService.getVehicles().subscribe((data: Vehicle.Request[]) => {
      this.vehicles = data;
      this.getTotalBrands();
    })
  }

  getTotalBrands(): void {
    const brands = this.vehicles.map((vehicle: Vehicle.Request) => vehicle.marca);
    let brandCounted: string[] = []
    const brandsCount = brands.map((brand) => {
      const brandFiltered = brands.filter(element => (element == brand && brandCounted.indexOf(brand) == -1))
      if (brandFiltered.length) {
        brandCounted.push(brand);
        return `${brand}: ${brandFiltered.length}`
      }
      return ""
    })
    this.totalBrands = brandsCount.filter(element => element !== "")
  }
}
