import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DmheaderComponent } from './dmheader.component';

describe('DmheaderComponent', () => {
  let component: DmheaderComponent;
  let fixture: ComponentFixture<DmheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
