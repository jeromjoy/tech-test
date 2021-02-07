import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Device } from './device';
import DEVICES from '../../assets/devices.json';


@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;

  title = 'Devices';

  displayedColumns: string[] = ['name', 'type', 'price'];
  dataSource = new MatTableDataSource(DEVICES.devices);


  constructor() {
    this.dataSource.filterPredicate = (data: Device, filter: string) => data.name.toLowerCase().indexOf(filter) !== -1;

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: any, property: string) => {
      switch (property) {
        case 'price': return +(item.price.replace(/\$/g, ''));
        default: return item[property].toLowerCase();
      }
    };

  }


  ngOnInit(): void {
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
