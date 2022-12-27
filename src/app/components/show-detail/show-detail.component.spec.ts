import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { ShowDetailComponent } from './show-detail.component';

describe('ShowDetailComponent', () => {
  let component: ShowDetailComponent;
  let fixture: ComponentFixture<ShowDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
