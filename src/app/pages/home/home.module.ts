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
import { FullCalendarModule } from '@fullcalendar/angular';
import { MakesComponent } from './sections/makes/makes.component';
import { MakeModule } from 'src/app/shared/make/make.module';
import { FacilitiesComponent } from './sections/facilities/facilities.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { AboutComponent } from './sections/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    JoinComponent,
    CategoriesComponent,
    HelpUsComponent,
    EventsComponent,
    MakesComponent,
    FacilitiesComponent,
    BenefitsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    CategoryModule,
    EventModule,
    MakeModule,
    NeedModule,
    FullCalendarModule,
    RouterModule.forChild(
      [
        { path: 'home', component: HomeComponent },
        { path: '**', redirectTo: 'home'}
      ]
    )
  ]
})
export class HomeModule { }
