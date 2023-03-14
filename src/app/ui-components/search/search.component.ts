import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface Option {
  name: string;
  value: string;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() OnSearchChanges: EventEmitter<any> = new EventEmitter();
  searchEmpty = true;
  searchInput = new FormControl();
  @Input() filterOptions: any = [{ value: 'Item title', placeHolder: 'Search by title ...' }, { value: 'Catgory', placeHolder: 'Search by category ...' }, { value: 'Provience', placeHolder: 'Search by provience ...' }];

  manuOpen = false;
  selected = this.filterOptions[0];

  constructor() { }

  ngOnInit(): void { }

  onSearchInput() {
    this.searchEmpty = this.searchInput.value === '';
    this.OnSearchChanges.emit(this.searchInput.value)
  }

  clearForm() {
    this.searchInput.setValue('');
    this.searchEmpty = true;
    this.OnSearchChanges.emit(this.searchInput.value)

  }

  togglemanu() {
    this.manuOpen = !this.manuOpen;
  }

  selectSortBy(value: any): void {
    this.selected = value;
    this.togglemanu();
  }
}
