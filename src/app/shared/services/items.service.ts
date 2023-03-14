import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ItemFiltere } from '../models/items-filter.model';



@Injectable({
    providedIn: 'root',
})
export class ItemsService {
    constructor(private http: HttpClient) {}
    // this.page = page;
    // this.limit = limit;
    public loadItems(filterProp:ItemFiltere): Observable<any> {
        const url =`http://localhost:3000/api/items?category=${filterProp.category}&SubCategory=${filterProp.subCategory}&search=${filterProp.search}&page=${filterProp.page}&limit=${filterProp.limit}`
        return this.http
            .get(
                url
                ,
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

    public loadSingleItem(id:any): Observable<any> {
        const url =`http://localhost:3000/api/items/${id}`
        return this.http
            .get(
                url
                ,
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

    public loadItemOwner(userId:any): Observable<any> {
        const url =`http://localhost:3000/api/auth/user/${userId}`
        return this.http
            .get(
                url
                ,
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

    // public loadItemsByCategory(filterProp:ItemFiltere): Observable<any> {
    //     const url =`http://localhost:3000/api/items/filter/filterBy?category=${filterProp.category}&SubCategory=${filterProp.subCategory}`
    //     return this.http
    //         .get(
    //             url
    //             ,
    //             {
    //                 observe: 'response',
    //             }
    //         )
    //         .pipe(
    //             map((response: any) => {
    //                 return response.body;
    //             })
    //         );
    // }
}
