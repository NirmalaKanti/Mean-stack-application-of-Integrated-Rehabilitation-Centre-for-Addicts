import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page15Component } from './page15.component';

describe('Page15Component', () => {
  let component: Page15Component;
  let fixture: ComponentFixture<Page15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
