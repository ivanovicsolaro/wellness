import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResourcesListPage } from './resources-list.page';

describe('ResourcesListPage', () => {
  let component: ResourcesListPage;
  let fixture: ComponentFixture<ResourcesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
