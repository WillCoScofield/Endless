import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepBadgeComponent } from '../footer/components/step-badge/step-badge.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { BannerComponent } from './banner.component';
import { OverlayComponent } from './components/overlay/overlay.component';


describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerComponent,
        OverlayComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
