import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class DataService {

    usersBaseUrl = 'http://localhost:3000/api/alerts';

    constructor(private http: HttpClient) { }

    getCustomers():any {
        return this.http.get(this.usersBaseUrl)
            .pipe(
                map(customers => {
                    return customers;
                }),
                catchError(this.handleError)
            );
    }


    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }


}
