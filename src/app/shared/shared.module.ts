import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { AppRoutingModule } from '../app-routing.module';
import { BreadcrumbModule } from 'angular-crumbs';
import { MinutesToHours } from './pipes/time_pipe';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    MinutesToHours,
    LogoComponent,
  ],
  imports: [
    AppRoutingModule,
    BreadcrumbModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    HeaderComponent,
    MinutesToHours,
  ]
})
export class SharedModule { }
