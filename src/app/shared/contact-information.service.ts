import { Injectable } from '@angular/core';
import { IMailingAddress } from './mailing-address';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationService {

  constructor() { }

  getMailingAddress(): IMailingAddress {
    return {
      address: 'P.O. Box 84458',
      city: 'Lexington',
      stateCode: 'SC',
      zipCode: '29073'
    }
  }

  getPhoneNumber(): string {
    return '803 359-6106';
  }

  getEmailAddress(): string {
    return 'info@centerpointesc.com';
  }
}
