import { Component } from '@angular/core';
import { TvmazeService } from '../../services/tvmaze.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent {
  showItems = [];
  
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
    })
  }
}