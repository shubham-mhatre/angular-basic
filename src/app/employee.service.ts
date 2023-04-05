import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Iemployee } from './employeeInterface';
import {catchError, Observable, throwError} from 'rxjs';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private jsonFileUrl:string="/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployee(){
    return [
      {"id":1, "name":"emp1","age":23},
      {"id":2, "name":"emp2","age":24},
      {"id":3, "name":"emp3","age":25},
      {"id":4, "name":"emp4","age":27}
    ];
  }

  getEmployeeFromGetCallToJSON() : Observable<Iemployee[]>{
    return this.http.get<Iemployee[]>(this.jsonFileUrl)
    .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
