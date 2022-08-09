import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalakkadComponent } from './palakkad.component';

describe('PalakkadComponent', () => {
  let component: PalakkadComponent;
  let fixture: ComponentFixture<PalakkadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalakkadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalakkadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
