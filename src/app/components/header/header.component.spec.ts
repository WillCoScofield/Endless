import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from '../banner/banner.component';
import { OverlayComponent } from '../banner/components/overlay/overlay.component';
import { StepBadgeComponent } from '../footer/components/step-badge/step-badge.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
