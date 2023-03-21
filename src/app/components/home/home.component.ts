import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvmazeService } from '../../services/tvmaze.service';
import { DataService } from '../../services/data.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ShowListComponent } from '../show-list/show-list.component';
import { NoResultsComponent } from '../no-results/no-results.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchBarComponent, ShowListComponent, NoResultsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent {
  showItems = [];
  isSearchEmpty = false;
  
  constructor(
    private tvmaze: TvmazeService,
    private _data: DataService
  ) {}

  ngOnInit() {
    this._data.showItems.subscribe(res => this.showItems = res);
    this._data.updateShowItems(this.showItems);
  }

  onTerm(term:string) {
    this.tvmaze.search(term).subscribe((response: any) => {
      this._data.updateShowItems(response);
      this.isSearchEmpty = this.showItems.length === 0;
    })
  }
}