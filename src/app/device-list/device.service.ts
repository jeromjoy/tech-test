import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import DEVICES from '../../assets/devices.json';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor() { }

  getDevices(): Observable<Device[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(DEVICES.devices);
  }
}
