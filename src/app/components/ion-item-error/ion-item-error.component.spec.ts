import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemErrorComponent } from './ion-item-error.component';

describe('IonItemErrorComponent', () => {
  let component: IonItemErrorComponent;
  let fixture: ComponentFixture<IonItemErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemErrorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
