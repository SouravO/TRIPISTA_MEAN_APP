import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


// search
enteredSearchValue: string = '';

// (property) HeaderComponent.searchTextChanged: EventEmitter<string>
@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
}


}
