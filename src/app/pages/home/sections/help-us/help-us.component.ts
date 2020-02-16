import { Component, OnInit, Input } from '@angular/core';
import { HelpUs } from 'src/app/client/home/api.home.model';

@Component({
  selector: 'app-help-us',
  templateUrl: './help-us.component.html',
  styleUrls: ['./help-us.component.scss']
})
export class HelpUsComponent implements OnInit {
  @Input() data: HelpUs;
  constructor() { }

  ngOnInit(): void {
  }

}
