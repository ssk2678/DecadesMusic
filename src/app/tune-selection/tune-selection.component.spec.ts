import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TuneSelectionComponent } from './tune-selection.component';

describe('TuneSelectionComponent', () => {
  let component: TuneSelectionComponent;
  let fixture: ComponentFixture<TuneSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({      
      declarations: [ TuneSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuneSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
