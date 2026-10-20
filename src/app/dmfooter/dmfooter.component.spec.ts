import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DmfooterComponent } from './dmfooter.component';

describe('DmfooterComponent', () => {
  let component: DmfooterComponent;
  let fixture: ComponentFixture<DmfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
