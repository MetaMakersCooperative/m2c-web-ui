import { Component, OnInit, Input } from '@angular/core';
import { LinkedMake } from '../../graph-builder/graph-builder.model';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.scss']
})
export class MakesComponent implements OnInit {
  @Input() data: LinkedMake[];
  constructor() { }

  ngOnInit(): void {
  }

}
