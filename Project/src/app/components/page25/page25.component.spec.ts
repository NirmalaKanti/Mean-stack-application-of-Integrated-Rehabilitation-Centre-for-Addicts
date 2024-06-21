import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page25Component } from './page25.component';

describe('Page25Component', () => {
  let component: Page25Component;
  let fixture: ComponentFixture<Page25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
