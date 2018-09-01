import { Component, OnInit } from '@angular/core';
import { MinistryService } from './ministry.service';
import { IMinistry } from './ministry';

@Component({
  selector: 'cpcc-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
    ministries: IMinistry[];

  constructor(private ministryInformationService: MinistryService) { }

  ngOnInit() {
      this.ministryInformationService.getMinistryInformation().subscribe(
          ministries => this.ministries = ministries
      );
  }

}
