import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepBadgeComponent } from './step-badge.component';


describe('StepBadgeComponent', () => {
  let component: StepBadgeComponent;
  let fixture: ComponentFixture<StepBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StepBadgeComponent,
      ],
      imports: [
        HttpClientModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBadgeComponent);
    component = fixture.componentInstance;
    component.stepBadge = {
      id: '3',
      stepNumber: '2',
      versionContent: [
        {
          body: 'Mock Body',
          effectiveDate: '2021-11-04T10:15:10.000Z',
          title: 'Mock title'
        },
        {
          body: 'Mock Body 2',
          effectiveDate: '2021-11-03T10:15:10.000Z',
          title: 'Mock title 2'
        },
      ]
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine badge messages', () => {
    component.determineMsgs(component.stepBadge.versionContent);
    expect(component.title).toEqual('Mock title');
    expect(component.body).toEqual('Mock Body');
    expect(component.sortedVersionContents.length).toEqual(1);
  });
});
