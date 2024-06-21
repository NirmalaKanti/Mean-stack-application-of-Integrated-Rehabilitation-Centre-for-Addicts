import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page23Component } from './page23.component';

describe('Page23Component', () => {
  let component: Page23Component;
  let fixture: ComponentFixture<Page23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
