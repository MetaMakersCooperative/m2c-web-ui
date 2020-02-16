import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule.forChild(
      [
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: 'home'}
      ]
    )
  ]
})
export class HomeModule { }
