import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathanamthittaComponent } from './pathanamthitta.component';

describe('PathanamthittaComponent', () => {
  let component: PathanamthittaComponent;
  let fixture: ComponentFixture<PathanamthittaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathanamthittaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathanamthittaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
