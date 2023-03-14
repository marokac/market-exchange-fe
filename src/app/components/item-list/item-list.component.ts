import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { homeRoute, itemsRoute } from 'src/app/constants';
import { ItemFiltere } from 'src/app/shared/models/items-filter.model';
import { ItemFilterPropsAction} from 'src/app/state/items/actions';
import { LoadFilterProps, loadItemsResponseSelector } from 'src/app/state/items/selectors';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  sortByMenu = [
    { name: 'Most recent' },
    { name: 'Price - low to high' },
    { name: 'Price - high to low' },
  ]

  Items: any = []
  filterProps: ItemFiltere = new ItemFiltere('','','',0,10);

  selectedSortBy = this.sortByMenu[0].name;
  manuOpen = false;

  searchManu = [
    {
      title: 'electronics',
      expanded: false,
      subMenu: [
        { title: 'electronics' },
        { title: 'play station' },
        { title: 'radio' },
        { title: 'milk' },
      ],
    },
    { title: 'sound', expanded: false, subMenu: [{ title: 'JBL' }] },
    { title: 'TV', expanded: false, subMenu: [{ title: 'Sumsung' }] },
  ];

  constructor(private router: Router, private store: Store<any>) {
    this.getFilterProps();
  }

  ngOnInit(): void {
    this.loadItems();
  }

  inputChange(event: any): void {
    const obj = this.BuildFilterrequest(event);
    this.store.dispatch(new ItemFilterPropsAction(Object.assign({},this.filterProps, {category :obj.categories, subCategory: obj.subCategories})));
  }

  selectSortBy(item: string) {
    this.selectedSortBy = item;
    this.manuOpen = !this.manuOpen;
  }

  openSortByMenu() {
    this.manuOpen = !this.manuOpen;
  }

  viewItem(item: any): void {
    this.router.navigate([homeRoute, itemsRoute, item.id]);
  }

  loadItems(): void {
    this.store.select(loadItemsResponseSelector).subscribe(items => {
      if (items) {
        this.Items = items;
      }
    })
  }

  BuildFilterrequest(data: any[]): any {
    const categories: any[] = [];
    const subCategories: any[] = [];

    data.forEach(val => {
      categories.push(val.category);
      subCategories.push(val.value);
    });

    return { categories: categories.join(), subCategories: subCategories.join() }
  }

  onSearchInput(value: any) {
    console.log(value)
    this.store.dispatch(new ItemFilterPropsAction(Object.assign({},this.filterProps, {search :value})));
    console.log(Object.assign({},this.filterProps, {search :value}))

  }

  onPaginateChange(event: any) {
    console.log(event)
    this.store.dispatch(new ItemFilterPropsAction(Object.assign({},this.filterProps, {page :event.pageIndex, limit :event.pageSize })));
  }

  getFilterProps(): void {
    this.store.select(LoadFilterProps).subscribe(filter => {
      if (filter) {
        this.filterProps = filter;
      }
    })
  }
}



