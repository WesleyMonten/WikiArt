import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiestToevoegenComponent } from './artiest.component';

describe('ArtiestComponent', () => {
  let component: ArtiestToevoegenComponent
  let fixture: ComponentFixture<ArtiestToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtiestToevoegenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiestToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
