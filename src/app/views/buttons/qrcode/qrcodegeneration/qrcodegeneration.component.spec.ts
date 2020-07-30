import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrcodegenerationComponent } from './qrcodegeneration.component';

describe('QrcodegenerationComponent', () => {
  let component: QrcodegenerationComponent;
  let fixture: ComponentFixture<QrcodegenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodegenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcodegenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
