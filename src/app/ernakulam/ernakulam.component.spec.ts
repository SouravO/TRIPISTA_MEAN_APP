import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnakulamComponent } from './ernakulam.component';

describe('ErnakulamComponent', () => {
  let component: ErnakulamComponent;
  let fixture: ComponentFixture<ErnakulamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErnakulamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErnakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
