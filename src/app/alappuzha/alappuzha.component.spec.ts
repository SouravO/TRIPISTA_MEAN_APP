import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlappuzhaComponent } from './alappuzha.component';

describe('AlappuzhaComponent', () => {
  let component: AlappuzhaComponent;
  let fixture: ComponentFixture<AlappuzhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlappuzhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlappuzhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
