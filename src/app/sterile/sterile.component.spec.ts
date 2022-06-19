import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SterileComponent } from './sterile.component';

describe('SterileComponent', () => {
  let component: SterileComponent;
  let fixture: ComponentFixture<SterileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SterileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SterileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
