import { Component, OnInit, Input } from '@angular/core';
import { Disclaimer } from './disclaimer.model';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
  animations: [
    trigger("dismissTrigger", [
      transition(':leave', [
        animate('300ms', style({
          transform: 'translateY(-100%)',
          opacity: 0
        }))
      ])
    ]
  )]
})
export class DisclaimerComponent implements OnInit {
  @Input() data: Disclaimer;

  constructor() { }

  ngOnInit(): void {
    if (this.data != null && this.data.show){
      if (this.data.dismiss == null) {
        this.data.dismiss = "Dismiss";
      }
      if (this.data.linkText == null) {
        this.data.linkText = this.data.linkAddress;
      }
    }
  }

  dismiss() {
    this.data = {
      show: false
    };
  }

}
