import { Injectable } from '@angular/core';
import { IMailingAddress } from './mailing-address';
import { IPerson } from './person';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationService {

  constructor() { }

  getChurchMailingAddress(): IMailingAddress {
    return {
      address: 'P.O. Box 84458',
      city: 'Lexington',
      stateCode: 'SC',
      zipCode: '29073'
    }
  }

  getChurchPhoneNumber(): string {
    return '803 359-6106';
  }

  getChurchEmailAddress(): string {
    return 'info@centerpointesc.com';
  }

  getPastorContactInformation(): IPerson {
    return {
      name: 'David Moore',
      title: 'Senior Pastor',
      email: 'david@centerpointesc.com'
    }
  }

  getAssociatePastorContactInformation(): IPerson {
    return {
      name: 'Greg Bolton',
      title: 'Associate Pastor',
      email: 'greg@centerpointesc.com'
    }
  }
}
