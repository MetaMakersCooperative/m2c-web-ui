import { Component, OnInit, Input } from '@angular/core';
import { HeaderSection } from 'src/app/client/home/api.home.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() data: HeaderSection;

  constructor() { }

  ngOnInit(): void {
  }

}
