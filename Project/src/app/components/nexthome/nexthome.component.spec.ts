import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexthomeComponent } from './nexthome.component';

describe('NexthomeComponent', () => {
  let component: NexthomeComponent;
  let fixture: ComponentFixture<NexthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NexthomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NexthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
