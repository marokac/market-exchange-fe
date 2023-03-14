import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPannelComponent } from './status-pannel.component';

describe('StatusPannelComponent', () => {
  let component: StatusPannelComponent;
  let fixture: ComponentFixture<StatusPannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
