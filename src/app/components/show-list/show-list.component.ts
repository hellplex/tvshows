import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.sass']
})
export class ShowListComponent {
  showItems = [];

  constructor(private _data: DataService) {}

  ngOnInit(){
    this._data.showItems.subscribe(res => this.showItems = res);
    this._data.updateShowItems(this.showItems);
  }

  getImage(show:any){
    const showImage = show.show.image;
    return showImage ? showImage.medium : 'assets/img/fallback.png';
  }

  getName(show:any){
    return show.show.name;
  }

  getRating(show:any){ 
    return show.show.rating.average;
  }
}
