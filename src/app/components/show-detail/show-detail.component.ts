import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.sass']
})
export class ShowDetailComponent {
  showid = '';
  showItems: any;
  selectedShow: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _data: DataService
  ) {
    this.route.params.subscribe(res => this.showid = res['id']);
  }

  ngOnInit(){
    this._data.showItems.subscribe(res => this.showItems = res);
    this._data.updateShowItems(this.showItems);

    this.selectedShow = this.showItems.find((item: any) => {
      return item.show.id === parseInt(this.showid);
    });
  }

  getTitle() {
    const title = this.selectedShow && this.selectedShow.show && this.selectedShow.show.name
    return title;
  }
  getImage(){
    const showImage = this.selectedShow && this.selectedShow.show && this.selectedShow.show.image;
    return showImage ? showImage.medium : 'assets/img/fallback.png';
  }
  getDescrition(){
    const description = this.selectedShow && this.selectedShow.show && this.selectedShow.show.summary;
    return description;
  }
  getGenres(){
    const genresList = this.selectedShow && this.selectedShow.show && this.selectedShow.show.genres;
    if(genresList && genresList.length) {
      return genresList.join(', ');
    } else {
      return '[Sin género]'
    }
  }

  getRating(){
    const rating = this.selectedShow && this.selectedShow.show && this.selectedShow.show.rating && this.selectedShow.show.rating.average
    return rating ;
  }

  getRatingStars(){
    const rating = this.getRating();
    if (rating)  {
      return `width: ${ 20 * rating }px`;
    }
    return 'width: 0px';
  }

  sendMeHome() {
    this._data.updateShowItems([]); // reset the list to not show previous search
    this.router.navigate(['']);
  }
}
