import { Component, OnInit, Input } from '@angular/core';
import { PriceInfo } from 'src/app/client/home/api.home.model';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  @Input() prices: PriceInfo[];
  constructor() { }

  ngOnInit(): void {
  }

}
