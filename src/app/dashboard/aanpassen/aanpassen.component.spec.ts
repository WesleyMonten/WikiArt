import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AanpassenComponent } from './aanpassen.component';

describe('AanpassenComponent', () => {
  let component: AanpassenComponent;
  let fixture: ComponentFixture<AanpassenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AanpassenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AanpassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
