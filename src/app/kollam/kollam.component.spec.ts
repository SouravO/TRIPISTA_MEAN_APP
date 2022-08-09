import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KollamComponent } from './kollam.component';

describe('KollamComponent', () => {
  let component: KollamComponent;
  let fixture: ComponentFixture<KollamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KollamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KollamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
