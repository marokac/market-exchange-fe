import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { ItemsService } from 'src/app/shared/services/items.service';
import {
    ItemFilterPropsAction,
    ItemsActionTypes,
    LoadItemOwnerAction,
    LoadItemOwnerErrorAction,
    LoadItemOwnerSuccessAction,
    LoadItemsErrorAction,
    LoadItemsSuccessAction,
    LoadSingleItemAction,
    LoadSingleItemErrorAction,
    LoadSingleItemSuccessAction
} from '../actions';
import { getFilterProps } from '../selectors';

@Injectable()
export class ItemsEffect {


    loadItemsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType<ItemFilterPropsAction>(ItemsActionTypes.ITEM_FILTER_PROPS),
            concatMap(action =>
                of(action).pipe(
                    withLatestFrom(this.store.select(getFilterProps))
                )
            ),
            mergeMap(([, filterProps]) => {
                return this.item.loadItems(filterProps).pipe(
                    map(response => {
                        return new LoadItemsSuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new LoadItemsErrorAction(error));
                    })
                );
            })
        ),
    );

    loadSingleEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType<LoadSingleItemAction>(ItemsActionTypes.LOAD_SINGLE_ITEM),
            mergeMap((action) => {
                return this.item.loadSingleItem(action.payload.id).pipe(
                    map(response => {
                        return new LoadSingleItemSuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new LoadSingleItemErrorAction(error));
                    })
                );
            })
        ),

    );

    loadItemOwnerDetailsEffect$ = createEffect(() =>
        this.actions$.pipe(
            ofType<LoadItemOwnerAction>(ItemsActionTypes.LOAD_ITEM_OWNER_DETAILS),
            mergeMap((action) => {
                return this.item.loadItemOwner(action.payload.userId).pipe(
                    map(response => {
                        return new LoadItemOwnerSuccessAction(response);
                    }),
                    catchError(error => {
                        return of(new LoadItemOwnerErrorAction(error));
                    })
                );
            })
        ),

    );

    constructor(
        private actions$: Actions,
        private store: Store<any>,
        private item: ItemsService
    ) { }
}
