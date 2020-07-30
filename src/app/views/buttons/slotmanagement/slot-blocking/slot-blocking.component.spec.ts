import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBlockingComponent } from './slot-blocking.component';

describe('SlotBlockingComponent', () => {
  let component: SlotBlockingComponent;
  let fixture: ComponentFixture<SlotBlockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBlockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
