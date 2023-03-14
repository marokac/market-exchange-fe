import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'ngx-webstorage';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { getUserLoginResponseSelector } from '../state/user/selectors/user.selector';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token = '';
    constructor(private sessionStorage: SessionStorageService, private store: Store<any>) {
        this.store.select(getUserLoginResponseSelector).subscribe(user=>{
            if(user){
                this.token = user.accessToken;
            }
        })
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (
            !request ||
            !request.url ||
            (/^http/.test(request.url) &&
            !request.url.includes('create'))
        ) {
            return next.handle(request);
        }

        if (this.token) {
            request = request.clone({
                setHeaders: {
                    'x-access-token': this.token,
                },
            });
        }
        return next.handle(request);
    }
}

