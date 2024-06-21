import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page28Component } from './page28.component';

describe('Page28Component', () => {
  let component: Page28Component;
  let fixture: ComponentFixture<Page28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Page28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
