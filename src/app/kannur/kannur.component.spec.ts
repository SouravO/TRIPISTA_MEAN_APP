import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KannurComponent } from './kannur.component';

describe('KannurComponent', () => {
  let component: KannurComponent;
  let fixture: ComponentFixture<KannurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KannurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KannurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
