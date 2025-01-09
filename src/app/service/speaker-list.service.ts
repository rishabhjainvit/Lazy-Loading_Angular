import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpeakerListService {
  configUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getSpeakersList(res: number, pageNum: number): Observable<any> {
    return this.http
      .get(`${this.configUrl}/?results=${res}&page=${pageNum}`)
      .pipe(
        retry(3), 
        catchError(this.handleError) 
      );
  }

  
  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
 
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
  // private Log(message : string){
  //   console.log(message);

  // }
  // public getSpeakerList1(res: number, pageNum: number): Observable<any> {
  //   return this.http
  //     .get(`${this.configUrl}/?results=${res}&page=${pageNum}`)
  //     .pipe(
  //       retry(3), 
  //       catchError(this.handleError) 
  //     );
  // }
  // public getspeakerList2(res: number,pagNum: number): Observable<any>{
  //   return this.http
  //   .get(`${this.configUrl}/?results=${res}&page=${pagNum}`)
  //   .pipe(
  //     retry(3),
  //     catchError(this.handleError)
  //   )
  // }
}
