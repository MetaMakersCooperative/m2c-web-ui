import { Component, OnInit, Input } from '@angular/core';
import { LinkedEvent } from 'src/app/pages/home/graph-builder/graph-builder.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: LinkedEvent;
  constructor() { }

  ngOnInit(): void {
  }

}
