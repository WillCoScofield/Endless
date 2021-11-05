import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StepBadge } from '../models/stepBadge';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = `https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge`
  constructor(private http: HttpClient) { }

  getStepBadges(): Observable<StepBadge[]> {
    return this.http.get<StepBadge[]>(this.url).pipe(
      tap((resp) => console.log('getStepBadges success')),
      catchError(this.handleError<StepBadge[]>('getStepBadges', []))
    )
  }

  handleError<T>(method, result ?: T){
    return (error: any): Observable<T> => {
      console.error(`The follow error occured during data service ${method} method:`, error );
      return of(result as T);
    };
  }


}
