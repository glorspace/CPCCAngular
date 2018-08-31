import { Component, OnInit } from '@angular/core';
import { IMailingAddress, MailingAddress } from './shared/mailing-address';
import { ContactInformationService } from './shared/contact-information.service';
import { IPerson, Person } from './shared/person';

@Component({
  selector: 'cpcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  churchAddress: IMailingAddress = new MailingAddress();
  churchPhone: string;
  churchEmail: string;
  pastorInfo: IPerson = new Person();
  associatePastorInfo: IPerson = new Person();

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
