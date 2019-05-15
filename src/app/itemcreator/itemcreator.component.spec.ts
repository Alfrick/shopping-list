import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcreatorComponent } from './itemcreator.component';

describe('ItemcreatorComponent', () => {
  let component: ItemcreatorComponent;
  let fixture: ComponentFixture<ItemcreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
