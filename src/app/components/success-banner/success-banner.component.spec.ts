import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessBannerComponent } from './success-banner.component';

describe('SuccessBannerComponent', () => {
  let component: SuccessBannerComponent;
  let fixture: ComponentFixture<SuccessBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
