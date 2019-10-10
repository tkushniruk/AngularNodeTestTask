import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorReport} from './error-report';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  NODE_API_SERVER = 'http://127.0.0.1:3000';
  constructor(private httpClient: HttpClient) { }

  readErrorReports(): Observable<ErrorReport[]> {
    return this.httpClient.get<ErrorReport[]>(`${this.NODE_API_SERVER}/errorReport`);
  }
}
