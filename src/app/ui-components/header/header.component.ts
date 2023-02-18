import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  manuItems = [
    {name: 'sell', value:'SELL'},
    {name: 'login', value:'LOGIN'},
    {name: 'join', value:'JOIN'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getNumberOfItems(): Number{
    return (1 / this.manuItems.length) * 100;
  }

}
