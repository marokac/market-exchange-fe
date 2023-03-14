import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { CreateAd } from 'src/app/shared/models/create-ad.model';
import { CreateAdService } from 'src/app/shared/services/create-add.service';
import { CreateAdActionTypes } from '../actions';
import { SubmitAdErrorAction, SubmitAdSuccessAction } from '../actions/create-add.actions';
import { getAdRequestDetails } from '../selectors/create-ad.selector';

@Injectable()
export class CreateAdEffect {
    createItemEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CreateAdActionTypes.SUBMIT_AD),
            concatMap(action =>
                of(action).pipe(
                    withLatestFrom(this.store.select(getAdRequestDetails))
                )
            ),
            mergeMap(([, { adDetails, adAddress,user }]) => {
                const req = new CreateAd(
                    adDetails.title,
                    adDetails.subtitle,
                    adDetails.discription,
                    adDetails.price,
                    adDetails.category,
                    adDetails.subCategory,
                    adDetails.imgUrls,
                    user.id,
                    adAddress.streetName,
                    adAddress.streetNumber,
                    adAddress.subub,
                    adAddress.city,
                    adAddress.postalCode,
                    adAddress.provience,
                    adAddress.lat,
                    adAddress.log,
                    adAddress.cellphone,
                    adAddress.email
                )
                return this.createAdService.address(req).pipe(
                    map(response => {
                        return new SubmitAdSuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new SubmitAdErrorAction(error));
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private createAdService: CreateAdService
    ) {}
}
