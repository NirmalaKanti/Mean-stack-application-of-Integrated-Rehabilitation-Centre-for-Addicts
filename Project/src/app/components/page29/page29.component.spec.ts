import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page29Component } from './page29.component';

describe('Page29Component', () => {
  let component: Page29Component;
  let fixture: ComponentFixture<Page29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page29Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
