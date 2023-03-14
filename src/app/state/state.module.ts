import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment.prod';
import { CreateAdEffect } from './create-ad/effects/create-ad.effects';
import { CreateAdReducer } from './create-ad/reducers/create-ad.reducer';
import { ItemsEffect } from './items/effects';
import { ItemsReducer } from './items/reducers';
import { UserEffect } from './user/effects/user.effect';
import { CreateUserReducer } from './user/reducers/user.reducer';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: [

        ],
        rehydrate: true,
        storage: sessionStorage,
        checkStorageAvailability: false,
    })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    imports: [
        StoreModule.forRoot(
            {
                createAd: CreateAdReducer,
                createUser: CreateUserReducer,
                items: ItemsReducer,
         
            },
            {
                metaReducers,
            }
        ),
        EffectsModule.forRoot([
            CreateAdEffect,
            UserEffect,
            ItemsEffect,
        ]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            features: {
                pause: false,
                lock: true,
                persist: true,
            },
        }),
    ],
    declarations: [],
    providers: [],
    entryComponents: [],
    exports: [],
})
export class StateManagementModule {
    static forRoot() {
        return {
            ngModule: StateManagementModule,
        };
    }
}
