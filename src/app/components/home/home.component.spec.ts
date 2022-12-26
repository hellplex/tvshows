import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoResultsComponent } from '../no-results/no-results.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ShowListComponent } from '../show-list/show-list.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SearchBarComponent,
        ShowListComponent,
        NoResultsComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
