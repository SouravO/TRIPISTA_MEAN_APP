import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrissurComponent } from './thrissur.component';

describe('ThrissurComponent', () => {
  let component: ThrissurComponent;
  let fixture: ComponentFixture<ThrissurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrissurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrissurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
