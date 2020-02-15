import { Component } from '@angular/core';
import { Disclaimer } from './shared/disclaimer/disclaimer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Meta Makers Cooperative";
  disclaimer: Disclaimer = {
    show: true,
    message: "This is a fake website for testing purposes.  The content on this page does not represent the views of Meta Makers Cooperative or its members.",
    dismiss: "Got it!",
    linkText: "Go to https://metamakers.org",
    linkAddress: "https://metamakers.org"
  };
}
