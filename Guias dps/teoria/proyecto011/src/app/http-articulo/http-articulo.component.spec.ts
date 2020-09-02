import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpArticuloComponent } from './http-articulo.component';

describe('HttpArticuloComponent', () => {
  let component: HttpArticuloComponent;
  let fixture: ComponentFixture<HttpArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
