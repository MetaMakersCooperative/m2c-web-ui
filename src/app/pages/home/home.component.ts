import { Component, OnInit } from '@angular/core';
import { HomeData } from 'src/app/client/home/api.home.model';
import { HomeService } from 'src/app/client/home/api.home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Observable<HomeData>;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.data = this.homeService.getData();
  }

}
