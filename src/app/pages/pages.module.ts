import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CoursesModule } from './courses/courses.module';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [HomeComponent, EditCourseComponent],
  imports: [
    CommonModule,
    CoursesModule,
  ],
  exports: [
    HomeComponent, EditCourseComponent,
  ]
})
export class PagesModule { }
