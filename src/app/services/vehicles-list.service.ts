import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "../Interfaces/vehicle";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehiclesListService {

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle.Request[]>{
    return this.http.get<Vehicle.Request[]>(environment.apiUrl)
  }
}
