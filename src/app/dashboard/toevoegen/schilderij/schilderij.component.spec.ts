import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchilderijToevoegenComponent } from './schilderij.component';

describe('SchilderijComponent', () => {
  let component: SchilderijToevoegenComponent;
  let fixture: ComponentFixture<SchilderijToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SchilderijToevoegenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchilderijToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
