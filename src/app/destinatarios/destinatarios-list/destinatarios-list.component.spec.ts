import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinatariosListComponent } from './destinatarios-list.component';

describe('DestinatariosListComponent', () => {
  let component: DestinatariosListComponent;
  let fixture: ComponentFixture<DestinatariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinatariosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinatariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
