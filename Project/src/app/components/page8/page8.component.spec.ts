import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page8Component } from './page8.component';

describe('Page8Component', () => {
  let component: Page8Component;
  let fixture: ComponentFixture<Page8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
