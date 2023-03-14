import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { homeRoute, itemListRoute } from 'src/app/constants';
import { LoadItemOwnerAction, LoadSingleItemAction } from 'src/app/state/items/actions';
import { loadItemOwnerDetailsResponseSelector, loadSingleItemResponseSelector } from 'src/app/state/items/selectors';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  images = [
    '../../../assets/images/img1.jpeg',
    '../../../assets/images/img2.jpeg',
    '../../../assets/images/img3.jpeg'
  ];

  item: any = {}
  owner: any = {}

  constructor(private router: Router, private route:ActivatedRoute, private store:Store<any>) { 
    this.route.params.subscribe( params =>{
    this.store.dispatch(new LoadSingleItemAction({id:params['id']}));
    })
  }

  ngOnInit(): void {
    this.getItemDetails();
    this.loadItemOwnerDetails();
  }

  backToResult(): void{
    this.router.navigate([homeRoute ,itemListRoute]);
  }

  getItemDetails(): void{
   this.store.select(loadSingleItemResponseSelector).subscribe(data=>{
    if(data){
      this.item = data;
      this.store.dispatch(new LoadItemOwnerAction({userId: this?.item?.userId}));
      console.log(this.item)
    }
   })
  }

  loadItemOwnerDetails(): void {
    this.store.select(loadItemOwnerDetailsResponseSelector).subscribe(data=>{
     if(data) {
      this.owner = data;
      console.log(this.owner)
     };
    })
  }
}
