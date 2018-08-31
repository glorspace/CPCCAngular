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
    this.contactInfoService.getChurchMailingAddress().subscribe(
      mailingAddress => this.churchAddress = mailingAddress
    );
    this.churchPhone = this.contactInfoService.getChurchPhoneNumber();
    this.churchEmail = this.contactInfoService.getChurchEmailAddress();
    this.contactInfoService.getPastorContactInformation().subscribe(
      pastorInfo => this.pastorInfo = pastorInfo
    );
    this.contactInfoService.getAssociatePastorContactInformation().subscribe(
      associatePastorInfo => this.associatePastorInfo = associatePastorInfo
    );
  }
}
