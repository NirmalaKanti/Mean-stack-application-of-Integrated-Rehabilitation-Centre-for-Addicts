import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page26Component } from './page26.component';

describe('Page26Component', () => {
  let component: Page26Component;
  let fixture: ComponentFixture<Page26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page26Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
