import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private searchShows = new BehaviorSubject<any>([]);

  showItems = this.searchShows.asObservable(); 

  constructor() {}

  updateShowItems(showItems:any) {
    this.searchShows.next(showItems);
  }
}
