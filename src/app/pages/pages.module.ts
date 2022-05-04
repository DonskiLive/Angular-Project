import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesModule } from './courses/courses.module';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [HomeComponent, CourseDetailComponent],
  imports: [
    CommonModule,
    CoursesModule,
  ],
  exports: [
    HomeComponent, CourseDetailComponent,
  ]
})
export class PagesModule { }
