import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { JoinComponent } from './sections/join/join.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    JoinComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    RouterModule.forChild(
      [
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: 'home'}
      ]
    )
  ]
})
export class HomeModule { }
