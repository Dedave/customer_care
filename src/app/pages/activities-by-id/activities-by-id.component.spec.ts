import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesByIdComponent } from './activities-by-id.component';

describe('ActivitiesByIdComponent', () => {
  let component: ActivitiesByIdComponent;
  let fixture: ComponentFixture<ActivitiesByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
