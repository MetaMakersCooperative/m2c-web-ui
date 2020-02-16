import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { JoinComponent } from './sections/join/join.component';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesComponent } from './sections/categories/categories.component';
import { CategoryModule } from 'src/app/shared/category/category.module';
import { HelpUsComponent } from './sections/help-us/help-us.component';
import { EventsComponent } from './sections/events/events.component';
import { EventModule } from 'src/app/shared/event/event.module';
import { NeedModule } from 'src/app/shared/need/need.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    JoinComponent,
    CategoriesComponent,
    HelpUsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    CategoryModule,
    EventModule,
    NeedModule,
    RouterModule.forChild(
      [
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: 'home'}
      ]
    )
  ]
})
export class HomeModule { }
