import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page22Component } from './page22.component';

describe('Page22Component', () => {
  let component: Page22Component;
  let fixture: ComponentFixture<Page22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
