
import { throwError as observableThrowError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Airline } from './airlines.model';


@Injectable()
export class AirlinesService {

  constructor(private _http: HttpClient) {
  }

  getAirlineList(country: string): Observable<Airline[]> {
    return this._http
      .get<Airline[]>(
        `/api/airline/${country}`
      )
      .pipe(
        catchError(this.handleError)
      );
  }


  setFavorite(id: number, favorite: boolean) {
    return this._http
      .get<Airline>(
        `/api/airline/${id}/${favorite}`
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
