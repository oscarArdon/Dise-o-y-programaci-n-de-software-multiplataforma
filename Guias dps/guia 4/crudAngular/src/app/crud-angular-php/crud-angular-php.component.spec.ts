import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAngularPhpComponent } from './crud-angular-php.component';

describe('CrudAngularPhpComponent', () => {
  let component: CrudAngularPhpComponent;
  let fixture: ComponentFixture<CrudAngularPhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAngularPhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAngularPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
