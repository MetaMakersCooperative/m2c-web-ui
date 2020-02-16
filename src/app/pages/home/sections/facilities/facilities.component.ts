import { Component, OnInit, Input } from '@angular/core';
import { LinkedFacility } from '../../graph-builder/graph-builder.model';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
  @Input() data: LinkedFacility[];
  constructor() { }

  selected: LinkedFacility;
  ngOnInit(): void {
    if (this.data && this.data.length>= 1) {
      this.selected = this.data[0];
    }
  }

  setSelected(facility: LinkedFacility) {
    this.selected = facility;
  }

}
