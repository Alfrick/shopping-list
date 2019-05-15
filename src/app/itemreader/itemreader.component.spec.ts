import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemreaderComponent } from './itemreader.component';

describe('ItemreaderComponent', () => {
  let component: ItemreaderComponent;
  let fixture: ComponentFixture<ItemreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
