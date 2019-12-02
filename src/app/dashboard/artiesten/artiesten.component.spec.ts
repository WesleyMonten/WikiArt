import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiestenComponent } from './artiesten.component';

describe('ArtiestenComponent', () => {
  let component: ArtiestenComponent;
  let fixture: ComponentFixture<ArtiestenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtiestenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtiestenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
