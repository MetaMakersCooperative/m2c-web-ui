import { Component, OnInit, Input } from '@angular/core';
import { LinkedMake } from 'src/app/pages/home/graph-builder/graph-builder.model';

@Component({
  selector: 'app-make',
  templateUrl: './make.component.html',
  styleUrls: ['./make.component.scss']
})
export class MakeComponent implements OnInit {
  @Input() make: LinkedMake;
  constructor() { }

  ngOnInit(): void {
  }

}
