import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page21Component } from './page21.component';

describe('Page21Component', () => {
  let component: Page21Component;
  let fixture: ComponentFixture<Page21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
