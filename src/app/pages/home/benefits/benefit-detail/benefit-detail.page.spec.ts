import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenefitDetailPage } from './benefit-detail.page';

describe('BenefitDetailPage', () => {
  let component: BenefitDetailPage;
  let fixture: ComponentFixture<BenefitDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenefitDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenefitDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
