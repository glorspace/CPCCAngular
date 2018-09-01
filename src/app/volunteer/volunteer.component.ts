import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cpcc-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {
    ministries = [
        {
            name: "Caring Ministry",
            summary: "Volunteers visit church attenders, friends and family in local hospitals or nursing homes. They also help provide supplies such as vases, flowers and yarn for shawls used in this ministry. Training is provided.",
            contactName: "Laura Sprague",
            contactEmail: "laura@centerpointesc.com"
        },
        {
            name: "Children’s Ministry",
            summary: "Volunteers serve Sunday mornings on a rotating basis in a variety of roles. Teachers and assistants, help at the registration desk, and nursery works are all vital to our children’s ministry (for children from birth through sixth grade). Church membership and adherence to Child Safety Policy required.",
            contactName: "Lisa Bolton",
            contactEmail: "lisa@centerpointesc.com"
        }
    ];

  constructor() { }

  ngOnInit() {
  }

}
