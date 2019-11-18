import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreToevoegenComponent } from './genre.component';

describe('GenreComponent', () => {
  let component: GenreToevoegenComponent;
  let fixture: ComponentFixture<GenreToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GenreToevoegenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
