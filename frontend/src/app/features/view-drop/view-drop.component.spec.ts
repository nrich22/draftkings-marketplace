import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDropComponent } from './view-drop.component';

describe('ViewDropComponent', () => {
  let component: ViewDropComponent;
  let fixture: ComponentFixture<ViewDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
