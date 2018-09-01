import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMinistry } from './ministry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinistryService {
    apiUrl: string = 'api/ministry-information/ministry-information.json';

  constructor(private http: HttpClient) { }

  getMinistryInformation(): Observable<IMinistry[]> {
      return this.http.get<IMinistry[]>(this.apiUrl);
  }
}
