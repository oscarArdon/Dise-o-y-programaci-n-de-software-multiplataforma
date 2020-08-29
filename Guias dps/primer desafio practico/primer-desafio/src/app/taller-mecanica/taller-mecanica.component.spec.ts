import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TallerMecanicaComponent } from './taller-mecanica.component';

describe('TallerMecanicaComponent', () => {
  let component: TallerMecanicaComponent;
  let fixture: ComponentFixture<TallerMecanicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TallerMecanicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TallerMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
