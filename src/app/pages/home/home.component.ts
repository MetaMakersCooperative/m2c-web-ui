import { Component, OnInit } from '@angular/core';
import { HomeData } from 'src/app/client/home/api.home.model';
import { HomeService } from 'src/app/client/home/api.home.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LinkedHomeData } from './graph-builder/graph-builder.model';
import { GraphBuilderService } from './graph-builder/graph-builder.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Observable<LinkedHomeData>;
  constructor(private homeService: HomeService, private linker: GraphBuilderService) { }

  ngOnInit(): void {
    var rawData$ = this.homeService.getData();
    this.data = rawData$.pipe(map(x => {
      return x == null ? null : this.linker.getGraph(x);
    }))
  }

}
