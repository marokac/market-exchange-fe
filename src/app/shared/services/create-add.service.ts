import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CreateAd } from '../models/create-ad.model';


@Injectable({
    providedIn: 'root',
})
export class CreateAdService {
    constructor(private http: HttpClient) {}
     
    public address(adInfo: CreateAd): Observable<any> {
        console.log(adInfo);
        const url ="http://localhost:3000/api/items/create"
        return this.http
            .post(
                url
                ,
                adInfo,
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
