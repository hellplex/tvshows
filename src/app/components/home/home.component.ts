import { Component } from '@angular/core';
import { TvmazeService } from '../../services/tvmaze.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent {
  showItems = [];
  
  constructor(
    private tvmaze: TvmazeService,
  ) {}

  ngOnInit() {}

  onTerm(term:string) {
    this.tvmaze.search(term).subscribe((response: any) => {
      console.log('SHOWS...', response)
    })
  }
}