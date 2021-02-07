import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      imports: [FormsModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial task and should update state', () => {
    const itemDiv = fixture.debugElement.query(By.css('.item')).nativeElement;
    expect(itemDiv.textContent).toContain('Hi');
    expect(itemDiv.textContent).toContain('assignment');

    let itemButton = fixture.debugElement.query(By.css('.item-header button')).nativeElement;
    itemButton.click();
    fixture.detectChanges();


    expect(itemDiv.textContent).toContain('schedule');

    itemButton = fixture.debugElement.query(By.css('.item-header button')).nativeElement;
    itemButton.click();
    fixture.detectChanges();

    expect(itemDiv.textContent).toContain('check_circle');


    itemButton = fixture.debugElement.query(By.css('.todo-list button')).nativeElement;
    itemButton.click();
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.item'))).toBeFalsy();

  });

  it('should add todo item to list', () => {
    const titleEl = fixture.debugElement.query(By.css('.add-item input')).nativeElement;
    titleEl.value = 'Test title';
    titleEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const itemButton = fixture.debugElement.query(By.css('.save-button')).nativeElement;

    itemButton.click();
    fixture.detectChanges();


    expect(fixture.debugElement.queryAll(By.css('.item')).length).toEqual(2);

  });
});
