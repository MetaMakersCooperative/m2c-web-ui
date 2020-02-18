import { Component, OnInit, Input } from '@angular/core';
import { Supporters } from 'src/app/client/home/api.home.model';

@Component({
  selector: 'app-supporters',
  templateUrl: './supporters.component.html',
  styleUrls: ['./supporters.component.scss']
})
export class SupportersComponent implements OnInit {
  @Input() data: Supporters;
  constructor() { }

  ngOnInit(): void {
  }

}
