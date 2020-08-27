import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Discusion1Component } from './discusion1.component';

describe('Discusion1Component', () => {
  let component: Discusion1Component;
  let fixture: ComponentFixture<Discusion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Discusion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Discusion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
