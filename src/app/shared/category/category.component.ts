import { Component, OnInit, Input } from '@angular/core';
import { LinkedCategory } from 'src/app/pages/home/graph-builder/graph-builder.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() category: LinkedCategory;
  constructor() { }

  ngOnInit(): void {
  }

}
