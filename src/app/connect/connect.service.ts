import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(private _http: HttpClient) { }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log(errorResponse);
    if (errorResponse.error instanceof ErrorEvent) {
      console.log(errorResponse.message);
    }
    else {
      console.log(errorResponse.message);
    }
    return throwError(() => {
      return 'Something wrong occur!!';
    });
  }

  header: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getDataByApi(URL: any) {
    return this._http.get(URL)
  }

  searchDataByApi(searchName: string, category: any, URL: any) {
    return this._http.get(`${URL}?${category}_like=${searchName}`).
      pipe(catchError(this.handleError))
  }

  searchDataByApiwithq(searchName: string, URL: any) {
    return this._http.get(`${URL}?q=${searchName}`).
      pipe(catchError(this.handleError))
  }

}
