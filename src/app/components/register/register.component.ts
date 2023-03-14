import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateUserAction, SaveCreateUserrequestAction } from 'src/app/state/user/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  pageIndexNumber = 0;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(null, Validators.required),
    cellphone: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpassword: new FormControl(null, Validators.required),
   
  });
  
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    
  }

  onInputChange(event: any){
    console.log(this.form.value);
    this.store.dispatch(new SaveCreateUserrequestAction(this.form.value));
  }

 nextIndex(){
  if(this.pageIndexNumber < 1){
    this.pageIndexNumber +=1;
  }
  else{
    if(this.form.valid){
      this.store.dispatch(new CreateUserAction());
    }
  }
 }
}


