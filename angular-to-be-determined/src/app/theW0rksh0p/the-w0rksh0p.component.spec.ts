import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheW0rksh0pComponent } from './the-w0rksh0p.component';

describe('TheW0rksh0pComponent', () => {
  let component: TheW0rksh0pComponent;
  let fixture: ComponentFixture<TheW0rksh0pComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheW0rksh0pComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheW0rksh0pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
