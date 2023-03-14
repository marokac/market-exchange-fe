import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() manuItems:{name: string, value: string, iconUrl: string}[] = [];

  @Input() profile:any = null;

  @Output() onMenuClickChange: EventEmitter<any> = new EventEmitter();

  profileMenuOpen = false;
 
  constructor() { }

  ngOnInit(): void {
  }

  getNumberOfItems(): Number{
    return (1 / this.manuItems.length) * 100;
  }

  onClickChange(value: string): void {
    this.onMenuClickChange.next(value);
  }

  openProfile(): void{
    if(this.profile){
      this.profileMenuOpen = !this.profileMenuOpen;
    }
  }

}
