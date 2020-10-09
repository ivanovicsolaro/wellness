import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutsideArgentinaModalComponent } from './outside-argentina-modal.component';

describe('OutsideArgentinaModalComponent', () => {
  let component: OutsideArgentinaModalComponent;
  let fixture: ComponentFixture<OutsideArgentinaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideArgentinaModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutsideArgentinaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
