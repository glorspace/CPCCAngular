import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IMailingAddress } from './mailing-address';
import { IPerson } from './person';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationService {

  constructor(private http: HttpClient) { }

  getChurchMailingAddress(): Observable<IMailingAddress>   {
    return this.http.get<IMailingAddress>('api/contact-information/church-mailing-address.json');
  }

  getChurchPhoneNumber(): string {
    return '803 359-6106';
  }

  getChurchEmailAddress(): string {
    return 'info@centerpointesc.com';
  }

  getPastorContactInformation(): Observable<IPerson> {
    return this.http.get<IPerson>('api/contact-information/pastor.json');
  }

  getAssociatePastorContactInformation(): Observable<IPerson> {
    return this.http.get<IPerson>('api/contact-information/associate-pastor.json');
  }
}
