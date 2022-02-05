import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCashService {
  arrCorrency:any [] = []
  constructor(private http: HttpClient) { }

  getCash(): Observable<any>{
    return this.http.get(environment.urlBank);
  }
}
