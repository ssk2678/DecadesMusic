import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestsongComponent } from './suggestsong.component';

describe('SuggestsongComponent', () => {
  let component: SuggestsongComponent;
  let fixture: ComponentFixture<SuggestsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
