import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookingformComponent } from './viewbookingform.component';

describe('ViewbookingformComponent', () => {
  let component: ViewbookingformComponent;
  let fixture: ComponentFixture<ViewbookingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbookingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
