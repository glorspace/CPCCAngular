import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISmallGroup } from './small-group';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SmallGroupService {
  apiUrl: string = 'api/small-group-information/small-group-information.json';

  constructor(private http: HttpClient) { }

  getSmallGroups(): Observable<ISmallGroup[]> {
      return this.http.get<ISmallGroup[]>(this.apiUrl);
  }
}
