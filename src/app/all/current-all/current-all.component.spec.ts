import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAllComponent } from './current-all.component';

describe('CurrentAllComponent', () => {
  let component: CurrentAllComponent;
  let fixture: ComponentFixture<CurrentAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
