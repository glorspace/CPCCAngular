import { Component, OnInit } from '@angular/core';
import { IMailingAddress } from './shared/mailing-address';
import { ContactInformationService } from './shared/contact-information.service';
import { IPerson } from './shared/person';

@Component({
  selector: 'cpcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  churchAddress: IMailingAddress;
  churchPhone: string;
  churchEmail: string;
  pastorInfo: IPerson;
  associatePastorInfo: IPerson;

  constructor(private contactInfoService: ContactInformationService) {}

  ngOnInit(): void {
    this.churchAddress = this.contactInfoService.getChurchMailingAddress();
    this.churchPhone = this.contactInfoService.getChurchPhoneNumber();
    this.churchEmail = this.contactInfoService.getChurchEmailAddress();
    this.pastorInfo = this.contactInfoService.getPastorContactInformation();
    this.associatePastorInfo = this.contactInfoService.getAssociatePastorContactInformation();
  }
}
