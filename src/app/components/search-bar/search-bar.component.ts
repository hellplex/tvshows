import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  @Output() submitted = new EventEmitter<string>();
  term = '';
  
  onFormSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}