import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page27Component } from './page27.component';

describe('Page27Component', () => {
  let component: Page27Component;
  let fixture: ComponentFixture<Page27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page27Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
