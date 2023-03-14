import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ChildActivationEnd, NavigationEnd, Router } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { createAdsRoute, homeRoute, userRoute, userRouteName } from './constants';
import { Event } from '@angular/router';
import { getUserLoginResponseSelector } from './state/user/selectors/user.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  manuItems = [
    { name: 'add', value: 'ADD', iconUrl: '../../../assets/images/add_circle_FILL0_wght400_GRAD0_opsz48.svg' },
    { name: 'login', value: 'LOGIN', iconUrl: '../../../assets/images/login.svg' },
    { name: 'join', value: 'JOIN', iconUrl: '../../../assets/images/person_add.svg' },
  ]

  profile:any = null;

  hideHeader = false;

  user:any = null;

  constructor(public dialog: MatDialog, private router: Router, private store: Store<any>) {
    this.getCurrentRoute();
    this.getLoggedInUser();
  }

  menuClickChange(type: string) {
    if (type === 'LOGIN' || type === 'JOIN' ) {
      this.openDialog(type);
      this.router.navigate([homeRoute, userRouteName, type.toLocaleLowerCase()]);
    } else if(type === 'ADD'){
      if(this.user){
        this.router.navigate([homeRoute, createAdsRoute]);
      } else{
        this.openDialog('LOGIN');
        this.router.navigate([homeRoute, userRouteName, 'login']);
      }
     
    }
    else {
    //open profile
    }
  }

  openDialog(type: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: type,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getCurrentRoute(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.split('/')[2] === createAdsRoute) {
          this.hideHeader = true;
        } else {
          this.hideHeader = false;
        }
      }
    })
  }

  getLoggedInUser(): void {
    this.store.select(getUserLoginResponseSelector).subscribe(user => {
      if (user) {
        this.user = user;
        this.manuItems = [
          { name: 'add', value: 'ADD', iconUrl: '../../../assets/images/add_circle_FILL0_wght400_GRAD0_opsz48.svg' },
        ]

        this.profile = {
          email:user.email,
          firstName:user.firstName,
          lastName:user.lastName
        }
      }
    })
  }
}
