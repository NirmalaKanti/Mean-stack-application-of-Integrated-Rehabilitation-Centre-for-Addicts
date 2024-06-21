import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page11Component } from './page11.component';

describe('Page11Component', () => {
  let component: Page11Component;
  let fixture: ComponentFixture<Page11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
