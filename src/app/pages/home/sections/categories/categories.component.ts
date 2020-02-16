import { Component, OnInit, Input } from '@angular/core';
import { LinkedCategory } from '../../graph-builder/graph-builder.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  @Input() data: LinkedCategory[];

  constructor() { }

  ngOnInit(): void {
  }

}
