import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacgumComponent } from './pacgum.component';

describe('PacgumComponent', () => {
  let component: PacgumComponent;
  let fixture: ComponentFixture<PacgumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacgumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacgumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
