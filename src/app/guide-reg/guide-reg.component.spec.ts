import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideRegComponent } from './guide-reg.component';

describe('GuideRegComponent', () => {
  let component: GuideRegComponent;
  let fixture: ComponentFixture<GuideRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
