import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepBadgeComponent } from 'src/app/components/footer/components/step-badge/step-badge.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BannerComponent } from '../../banner.component';
import { OverlayComponent } from './overlay.component';


describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OverlayComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
