import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleDetailsComponent } from './principle-details.component';

describe('PrincipleDetailsComponent', () => {
  let component: PrincipleDetailsComponent;
  let fixture: ComponentFixture<PrincipleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
