import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page12Component } from './page12.component';

describe('Page12Component', () => {
  let component: Page12Component;
  let fixture: ComponentFixture<Page12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
