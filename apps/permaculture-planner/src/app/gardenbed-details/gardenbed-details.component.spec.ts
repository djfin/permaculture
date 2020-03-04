import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenbedDetailsComponent } from './gardenbed-details.component';

describe('GardenbedDetailsComponent', () => {
  let component: GardenbedDetailsComponent;
  let fixture: ComponentFixture<GardenbedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenbedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenbedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
