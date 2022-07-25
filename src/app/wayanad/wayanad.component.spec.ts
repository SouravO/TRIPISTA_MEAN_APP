import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayanadComponent } from './wayanad.component';

describe('WayanadComponent', () => {
  let component: WayanadComponent;
  let fixture: ComponentFixture<WayanadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayanadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WayanadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
