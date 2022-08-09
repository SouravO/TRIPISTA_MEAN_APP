import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasaragodComponent } from './kasaragod.component';

describe('KasaragodComponent', () => {
  let component: KasaragodComponent;
  let fixture: ComponentFixture<KasaragodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasaragodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KasaragodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
