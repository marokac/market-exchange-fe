import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-tile',
  templateUrl: './item-tile.component.html',
  styleUrls: ['./item-tile.component.scss']
})
export class ItemTileComponent implements OnInit {
  @Input() item:any;
  constructor() { }

  ngOnInit(): void {
  }

}
