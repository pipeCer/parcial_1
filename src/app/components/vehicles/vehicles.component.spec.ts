import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesComponent } from './vehicles.component';
import {VehiclesListService} from "../../services/vehicles-list.service";
// @ts-ignore
import vehiclesRequest from "../../services/__mocks__/vehicles.json"
import {Vehicle} from "../../Interfaces/vehicle";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {asyncData} from "../../helpers/testing/async-observable-helpers";
describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;
  let fakeVehiclesService: VehiclesListService;

  const expectedVehicles: Vehicle.Request[] = vehiclesRequest.vehicles;

  beforeEach(async () => {
    fakeVehiclesService = jasmine.createSpyObj<VehiclesListService>(
      "VehiclesListService",{
        getVehicles: of(expectedVehicles)
      }
    )

    await TestBed.configureTestingModule({
      declarations: [ VehiclesComponent ],
      providers: [
        {provide: VehiclesListService, useValue: fakeVehiclesService}
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should vehicles return expectedVehicles', () => {
    expect(component.vehicles).toEqual(expectedVehicles)
  });
  it('Should vehicles will be rendered in the table', ()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.getElementsByClassName('auto-row');
    expect(rows.length).toEqual(component.vehicles.length);
  });
  it('Should render table header in the table', ()=>{
    const compiled = fixture.nativeElement as HTMLElement;
    const header = compiled.getElementsByClassName('thead-dark');
    expect(header[0].children[0].tagName).toEqual('TR');
  })
});
