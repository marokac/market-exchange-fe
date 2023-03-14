import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { homeRoute, itemDetailsRoute, itemListRoute } from 'src/app/constants';
import { SubmitAdAction } from 'src/app/state/create-ad/actions/create-add.actions';

@Component({
  selector: 'app-create-ads',
  templateUrl: './create-ads.component.html',
  styleUrls: ['./create-ads.component.scss']
})
export class CreateAdsComponent implements OnInit {
  currentPageIndex = 0;
  progress = '33';
  constructor(private router: Router, private store: Store<any>) { }

  ngOnInit(): void {
  }

  onCurrentPageChange(event: number){
    this.currentPageIndex = event;
  }

  closePannel(event?:any): void{
    this.redirectToHome();
  }

  redirectToHome(){
    this.router.navigate([homeRoute ,itemListRoute]);
 }

}
