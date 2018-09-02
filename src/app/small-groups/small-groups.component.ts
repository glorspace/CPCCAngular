import { Component, OnInit } from '@angular/core';
import { ISmallGroup } from './small-group';
import { SmallGroupService } from './small-group.service';

@Component({
  selector: 'cpcc-small-groups',
  templateUrl: './small-groups.component.html',
  styleUrls: ['./small-groups.component.css']
})
export class SmallGroupsComponent implements OnInit {
    smallGroups: ISmallGroup[];

  constructor(private smallGroupService: SmallGroupService) { }

  ngOnInit() {
      this.smallGroupService.getSmallGroups().subscribe(
          smallGroups => this.smallGroups = smallGroups
      )
  }

}
