import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W0rkSh0pHeaderComponent } from './w0rk-sh0p-header.component';

describe('W0rkSh0pHeaderComponent', () => {
  let component: W0rkSh0pHeaderComponent;
  let fixture: ComponentFixture<W0rkSh0pHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W0rkSh0pHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(W0rkSh0pHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
