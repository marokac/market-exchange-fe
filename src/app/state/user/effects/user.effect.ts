import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { CreateUserActionTypes, CreateUserErrorAction, CreateUserSuccessAction, LoginActionTypes, SocialLoginActionTypes, SocialUserLoginAction, SocialUserLoginErrorAction, SocialUserLoginuccessAction, UserLoginErrorAction, UserLoginuccessAction } from '../actions';
import { getCreateRequestSelector, getLoginRequestSelector } from '../selectors/user.selector';

@Injectable()
export class UserEffect {
    createUserEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CreateUserActionTypes.CREATE_USER),
            concatMap(action =>
                of(action).pipe(
                    withLatestFrom(this.store.select(getCreateRequestSelector))
                )
            ),
            mergeMap(([, { user}]) => {

                const req = new User(
                    user.email,
                    user.password,
                    user.lastName,
                    user.cellphone,
                )
                return this.userService.createUser(req).pipe(
                    map(response => {
                        return new CreateUserSuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new CreateUserErrorAction(error));
                    })
                );
            })
        )
    );

    userLoginEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginActionTypes.USER_LOGIN),
            concatMap(action =>
                of(action).pipe(
                    withLatestFrom(this.store.select(getLoginRequestSelector))
                )
            ),
            mergeMap(([, { user}]) => {

                const req = new User(
                    user.email,
                    user.password,
                )
                return this.userService.userLogin(req).pipe(
                    map(response => {
                        return new UserLoginuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new UserLoginErrorAction(error));
                    })
                );
            })
        )
    );


socialUserLoginEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType<SocialUserLoginAction>(SocialLoginActionTypes.SOCIAL_USER_LOGIN),
            mergeMap((action) => {
                const req = new User(
                    action.payload.email,
                    '',
                    action.payload.firstName ,
                    action.payload.lastName,
                )
                return this.userService.socialLogin(req).pipe(
                    map(response => {
                        return new UserLoginuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new UserLoginErrorAction(error));
                    })
                );
            })
        ),
  
);


    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private userService: UserService
    ) {}
}
