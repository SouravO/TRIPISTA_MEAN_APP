import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KottayamComponent } from './kottayam.component';

describe('KottayamComponent', () => {
  let component: KottayamComponent;
  let fixture: ComponentFixture<KottayamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KottayamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KottayamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
