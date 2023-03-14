import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SetAdDetailsAction } from 'src/app/state/create-ad/actions/create-add.actions';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.scss']
})
export class AdDetailsComponent implements OnInit {
  @Output() onCurrentPageChange: EventEmitter<number> = new EventEmitter();

  validationMessages: any = {
    title: {
      required : 'Email is required',
    },
    subtitle: {
      required : 'Password is required',
    },
    discription: {
      required : 'Email is required',
    },
    category: {
      required : 'Password is required',
    },
    subcategory: {
      required : 'Email is required',
    },
    price: {
      required : 'Password is required',
    },
    files: {
      required : 'Password is required',
    }
  };

  formError :any = {
    title:'',
    subtitle: '',
    discription:'',
    category: '',
    subcategory:'',
    price: '',
    files: ''
  }

  form: FormGroup = new FormGroup({
    title: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    subtitle: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    discription: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    category: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    subcategory: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    price: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'}),
    files: new FormControl(null, {validators: [Validators.required], updateOn: 'blur'})
  });
  
  categoryOptions = [
    {name:'vihicle',value:'Vihicle'},
    {name:'electronics',value:'Electronics'},
    {name:'appliances',value:'Appliances'},
    {name:'Gagets',value:'Gagets'},
    {name:'general work',value:'General work'},
    {name:'clotes',value:'Clotes'},
    {name:'farming',value:'Farming'},
    {name:'mining',value:'Mining'},
    {name:'school',value:'School'},
    {name:'construction',value:'Construction'},
    {name:'funiture',value:'Funiture'},
    {name:'kids',value:'Kids'}
]

fileList:{fileName: string, event: any}[] = [];

  
  constructor(private store : Store<any>) { }

  ngOnInit(): void {
   this.validateForm()
  }

  nextBtnClick(){
    if(this.form.valid){
      const adDetails = {
        title: this.form.get('title')?.value,
        subtitle: this.form.get('subtitle')?.value,
        discription:this.form.get('discription')?.value,
        category: this.form.get('category')?.value,
        subCategory: this.form.get('subcategory')?.value,
        price: this.form.get('price')?.value,
        imgUrls: [],
      }

      this.store.dispatch(new SetAdDetailsAction(adDetails));
      this.onCurrentPageChange.emit(1);
    } else {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      this.form.updateValueAndValidity();
    }
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

  onInputChange(event: any): void{
    //console.log(this.form.value);
    console.log('jjj',this.formError)
  }

  onFileInputChange(event: any): void{
    this.fileList.push(event);
    console.log(this.fileList);
  }

  dropdownValueChanged(event: any): void{
    console.log(event)
  }

}
