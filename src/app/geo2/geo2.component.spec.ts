import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Geo2Component } from './geo2.component';

describe('Geo2Component', () => {
  let component: Geo2Component;
  let fixture: ComponentFixture<Geo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Geo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Geo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
