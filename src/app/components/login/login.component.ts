import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/shared/models/user.model';
import { SaveLoginRequestAction, SocialUserLoginAction, UserLoginAction } from 'src/app/state/user/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validationMessages: any = {
    email: {
      required: 'Email is required',
      email: 'Invalid email address'
    },
    password: {
      required: 'Password is required',
    }
  };

  formError: any = {
    email: '',
    password: ''
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(null, { validators: [Validators.required, Validators.email], updateOn: 'blur' }),
    password: new FormControl(null, { validators: [Validators.required], updateOn: 'blur' })
  });

  // | SaveCreateUserrequestAction
  // | CreateUserAction
  // | CreateUserSuccessAction
  // | CreateUserErrorAction
  // | SaveLoginRequestAction
  // | UserLoginAction
  // | UserLoginuccessAction
  // | UserLoginErrorAction;
  constructor(private socialAuthService: SocialAuthService, private store: Store<any>) { }

  ngOnInit(): void {
    console.log(this.validationMessages['name2']);
    this.validateForm();
    console.log(this.socialAuthService)
    this.socialAuthService?.authState?.subscribe((user) => {
      if (user) {
        console.log(user)
        const req = {
          email: user.email,
          password: '',
          firstName: user.firstName,
          lastName: user.lastName
        }
        console.log(req)
        this.store.dispatch(new SocialUserLoginAction(req));
      }

    });
  }

  onInputChange(event: any) {
    console.log(event);
  }

  saveFormdata(): void {
    const req = new User(
      this.form.get('email')?.value,
      this.form.get('password')?.value,
    )
    this.store.dispatch(new SaveLoginRequestAction(req));
  }

  validateForm(): void {
    this.form.valueChanges.subscribe(value => {
      for (let key in value) {
        if (this.form.get(key)?.errors) {
          const errors = this.form.get(key)?.errors ?? {};
          for (let val in errors) {
            if (errors[val] && this.form.get(key)?.invalid && this.form.get(key)?.dirty) {
              this.formError[key] = this.validationMessages[key][val]
            }
          }
        } else {
          this.formError[key] = ''
        }
      }
      this.saveFormdata();
    }

    )
  }


  loginWithGoogle(): void {
    console.log(this.socialAuthService)
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    //SocialUserLoginAction;

  }
  logOut(): void {
    this.socialAuthService.signOut();
  }

  login(): void {
    if (this.form.valid) {
      this.store.dispatch(new UserLoginAction());
    }
  }
}
