import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdukkiComponent } from './idukki.component';

describe('IdukkiComponent', () => {
  let component: IdukkiComponent;
  let fixture: ComponentFixture<IdukkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdukkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdukkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
