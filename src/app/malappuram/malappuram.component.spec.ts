import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalappuramComponent } from './malappuram.component';

describe('MalappuramComponent', () => {
  let component: MalappuramComponent;
  let fixture: ComponentFixture<MalappuramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalappuramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalappuramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
