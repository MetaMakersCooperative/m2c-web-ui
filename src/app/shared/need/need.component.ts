import { Component, OnInit, Input } from '@angular/core';
import { Need } from 'src/app/client/home/api.home.model';

@Component({
  selector: 'app-need',
  templateUrl: './need.component.html',
  styleUrls: ['./need.component.scss']
})
export class NeedComponent implements OnInit {
  @Input() need: Need;
  constructor() { }

  ngOnInit(): void {
  }

}
