import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemFiltere } from 'src/app/shared/models/items-filter.model';
import { ItemFilterPropsAction, LoadItemsAction } from 'src/app/state/items/actions';
import { LoadFilterProps } from 'src/app/state/items/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filterProps: any;
  constructor(private store: Store<any>) {
    this.getFilterProps();
    if (this.filterProps) {
      this.store.dispatch(new ItemFilterPropsAction(this.filterProps));
    }
    else {
      const filter = new ItemFiltere('','','',0,2);
      this.store.dispatch(new ItemFilterPropsAction(filter));
    }
  }

  ngOnInit(): void {
  }

  getFilterProps(): void {
    this.store.select(LoadFilterProps).subscribe(filter => {
      if (filter) {
        this.filterProps = filter;

      }
    })
  }
}
