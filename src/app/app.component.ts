import { Component } from '@angular/core';
import { Disclaimer } from './shared/disclaimer/disclaimer.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disclaimer: Disclaimer = environment.disclaimer;
  environment = environment;
}
