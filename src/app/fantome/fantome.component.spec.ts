import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FantomeComponent } from './fantome.component';

describe('FantomeComponent', () => {
  let component: FantomeComponent;
  let fixture: ComponentFixture<FantomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FantomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FantomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
