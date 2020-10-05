import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReparacionesComponent } from './list-reparaciones.component';

describe('ListReparacionesComponent', () => {
  let component: ListReparacionesComponent;
  let fixture: ComponentFixture<ListReparacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReparacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReparacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
