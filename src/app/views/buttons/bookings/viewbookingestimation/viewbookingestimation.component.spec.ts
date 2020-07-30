import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingestimationComponent } from './viewbookingestimation.component';

describe('ViewbookingestimationComponent', () => {
  let component: ViewbookingestimationComponent;
  let fixture: ComponentFixture<ViewbookingestimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbookingestimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingestimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
