import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormControlsComponent } from './demo-form-controls.component';

describe('DemoFormControlsComponent', () => {
  let component: DemoFormControlsComponent;
  let fixture: ComponentFixture<DemoFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
