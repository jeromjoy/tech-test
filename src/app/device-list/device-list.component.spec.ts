import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import {MatTableHarness} from '@angular/material/table/testing';
import {HarnessLoader, parallel} from '@angular/cdk/testing';

import { DeviceListComponent } from './device-list.component';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DeviceListComponent', () => {
  let loader: HarnessLoader;
  let component: DeviceListComponent;
  let fixture: ComponentFixture<DeviceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatSortModule, BrowserAnimationsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

      declarations: [ DeviceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it('should do filter', async () => {
    const table = await loader.getHarness(MatTableHarness);
    const headerRows = await table.getHeaderRows();
    const rows = await table.getRows();
    expect(headerRows.length).toBe(1);
    expect(rows.length).toBe(14);
    expect(fixture.debugElement.nativeElement.textContent).toContain('Samsung');

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.value = 'iphone';
    inputEl.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toContain('iPhone 12');
    expect(fixture.debugElement.nativeElement.textContent).not.toContain('Samsung');
  });

  it('should do sort', async () => {
    const table = await loader.getHarness(MatTableHarness);
    const headerRows = await table.getHeaderRows();
    const rows = await table.getRows();
    expect(headerRows.length).toBe(1);
    expect(rows.length).toBe(14);


    const nameHeadEl = fixture.debugElement.queryAll(By.css('th'))[0].nativeElement;
    nameHeadEl.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const firstNameContent = fixture.debugElement.query(By.css('td')).nativeElement;
    expect(firstNameContent.textContent).toContain('A4Tech A3');


  });
});
