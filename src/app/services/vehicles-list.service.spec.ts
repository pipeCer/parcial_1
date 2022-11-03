import { TestBed } from '@angular/core/testing';
import { VehiclesListService } from './vehicles-list.service';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Vehicle} from "../Interfaces/vehicle";
import {asyncData, asyncError} from '../helpers/testing/async-observable-helpers';
// @ts-ignore
import vehiclesRequest from './__mocks__/vehicles.json';

describe('VehiclesListService', () => {
  let vehiclesListService: VehiclesListService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    vehiclesListService = new VehiclesListService(httpClientSpy);
  });

  describe('getVehicles', (): void => {
    it('should return expected vehicles (HttpClient called once)', (done: DoneFn): void => {
      const expectedVehicles: Vehicle.Request[] = vehiclesRequest.vehicles;
      httpClientSpy.get.and.returnValue(asyncData(expectedVehicles));

      vehiclesListService.getVehicles().subscribe({
        next: (vehicles: Vehicle.Request[]) => {
          expect(vehicles)
            .withContext('expected vehicles')
            .toEqual(expectedVehicles);
          done();
        },
        error: done.fail,
      });

      expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    });

    it('should return an error when the server returns a 404', (done: DoneFn): void => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404,
        statusText: 'Not Found',
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      vehiclesListService.getVehicles().subscribe({
        next: () => done.fail('expected an error, not vehicles'),
        error: (error: any) => {
          expect(error.message).toContain('404 Not Found');
          done();
        },
      });
    });
  });
});
