import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { SessionStorageService } from 'ngx-webstorage';


@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient , private $sessionStorage: SessionStorageService) {}
    
    
    public createUser(user: User): Observable<any> {
        const url ="http://localhost:3000/api/auth/signup/"
        return this.http
            .post(
                url
                ,
                user,
                {
                    observe: 'response',
                }
            )
            .pipe(
                map((response: any) => {
                    this.$sessionStorage.store('accessToken', response.body?.accessToken);
                    return response.body;
                })
            );
    }


    public userLogin(user: User): Observable<any> {
        const url ="http://localhost:3000/api/auth/signin/"
        return this.http
            .post(
                url
                ,
                user,
                {
                    observe: 'response',
                }
            )
            .pipe(
                map((response: any) => {
                    this.$sessionStorage.store('accessToken', response.body?.accessToken);
                    return response.body;
                })
            );
    }



    public socialLogin(user: User): Observable<any> {
        const url ="http://localhost:3000/api/auth/social-signin/"
        return this.http
            .post(
                url
                ,
                user,
                {
                    observe: 'response',
                }
            )
            .pipe(
                map((response: any) => {
                    return response.body;
                })
            );
    }
}
