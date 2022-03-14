import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODSListComponent } from './ods-list.component';

describe('ODSListComponent', () => {
  let component: ODSListComponent;
  let fixture: ComponentFixture<ODSListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODSListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ODSListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
