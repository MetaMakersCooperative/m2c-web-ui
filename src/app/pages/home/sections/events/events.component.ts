import { Component, OnInit, Input } from '@angular/core';
import { LinkedEvent } from '../../graph-builder/graph-builder.model';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @Input() data: LinkedEvent[];
  constructor() { }

  ngOnInit(): void {
  }

  calendarPlugins = [dayGridPlugin]; // important!

}
