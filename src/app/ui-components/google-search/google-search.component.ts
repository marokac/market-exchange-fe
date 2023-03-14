import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { } from 'googlemaps'; 

declare var google: any

@Component({
  selector: 'app-google-search',
  templateUrl: './google-search.component.html',
  styleUrls: ['./google-search.component.scss']
})
export class GoogleSearchComponent implements OnInit ,AfterViewInit{

  @Input() data:any;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  autocompleteInput: any;
  queryWait = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
      this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
      const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
          {
              componentRestrictions: { country: 'us' },
              types: ['address']  // 'establishment' / 'address' / 'geocode'
          });
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
          const place = autocomplete.getPlace();
          this.invokeEvent(place);
      });
  }

  invokeEvent(place: Object) {
      this.setAddress.emit(place);
  }

  clearField(): void{
    this.autocompleteInput = '';
    this.invokeEvent({});
  }

}
