import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SetAddressDetailsAction, SubmitAdAction } from 'src/app/state/create-ad/actions/create-add.actions';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Output() onCurrentPageChange: EventEmitter<number> = new EventEmitter();

  validationMessages: any = {
    search: {
      required : 'Email is required',
    },
    streetName: {
      required : 'Password is required',
    },
    subub: {
      required : 'Email is required',
    },
    streetNumber: {
      required : 'Password is required',
    },
    city: {
      required : 'Email is required',
    },
    provience: {
      required : 'Password is required',
    },
    postalCode: {
      required : 'Password is required',
    },

    cellphone: {
      required : 'Password is required',
    },
    email: {
      required : 'Password is required',
    },
  };

  formError :any = {
    search:'',
    streetName: '',
    subub:'',
    streetNumber: '',
    city:'',
    provience: '',
    postalCode: '',
    cellphone: '',
    email: ''
  }

  coodinate:{lat: string, log: string} = {log:'0',lat: '0'}
  
  form: FormGroup = new FormGroup({
    search: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    streetName: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    streetNumber: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    subub: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    city: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    provience: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    postalCode: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    cellphone: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    email: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
  });
  constructor(private store : Store<any>) { }

  ngOnInit(): void {
    this.disAbleFields();
  }

  nextBtnClick(){
   
      const addressDetails = {
        search: this.form.get('search')?.value,
        streetName: this.form.get('streetName')?.value,
        streetNumber: this.form.get('streetNumber')?.value,
        subub: this.form.get('subub')?.value,
        city: this.form.get('city')?.value,
        provience: this.form.get('provience')?.value,
        postalCode: this.form.get('postalCode')?.value,
        lat: this.coodinate.lat,
        log: this.coodinate.log,
        cellphone: this.form.get('cellphone')?.value,
        email: this.form.get('email')?.value,
      }
      this.store.dispatch(new SetAddressDetailsAction(addressDetails));
      this.store.dispatch(new SubmitAdAction());
      this.onCurrentPageChange.emit(2);
    
    
  }
  backBtnClick(){
    this.onCurrentPageChange.emit(0);
  }

  validateForm(): void{
    this.form.valueChanges.subscribe(value=>
      {
        for(let key in value){
          if(this.form.get(key)?.errors){
            const errors = this.form.get(key)?.errors ?? {};
            for(let val in errors){
                if(errors[val] && this.form.get(key)?.invalid && this.form.get(key)?.dirty){
                  this.formError[key] = this.validationMessages[key][val]
                }
            }
          }else{
            this.formError[key] = ''
          }
        }
       
      }
     
      )
  }

  onInputChange(event: any){
    //console.log(this.form.value);
    console.log('jjj',this.formError)
  }

  setGoogleAddress(event: any): void{
    if(event && Object.entries(event).length > 0){
      let address:any = {}
      event.address_components.forEach((compo: any)=> {
        const adr: string = compo.types[0];
        address[adr] = compo.long_name;
      });
      console.log(address);
      this.patcheFormValues(address);
    } else{
      this.clearFields();
    }
   


  }

  patcheFormValues(address: any): void{
    this.form.get('streetName')?.setValue(address?.route);
    this.form.get('streetNumber')?.setValue(address.street_number);
    this.form.get('subub')?.setValue(address.locality);
    this.form.get('city')?.setValue(address.administrative_area_level_2);
    this.form.get('provience')?.setValue(address?.administrative_area_level_1);
    this.form.get('postalCode')?.setValue(address.postal_code);
  }

  clearFields(): void{
    this.form.get('streetName')?.setValue('');
    this.form.get('streetNumber')?.setValue('');
    this.form.get('subub')?.setValue('');
    this.form.get('city')?.setValue('');
    this.form.get('provience')?.setValue('');
    this.form.get('postalCode')?.setValue('');
  }

  disAbleFields(): void{
    this.form.get('streetName')?.disable();
    this.form.get('streetNumber')?.disable();
    this.form.get('subub')?.disable();
    this.form.get('city')?.disable();
    this.form.get('provience')?.disable();
    this.form.get('postalCode')?.disable();
  }

}
