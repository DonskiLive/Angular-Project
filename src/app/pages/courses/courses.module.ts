import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { CoursesComponent } from './courses.component';
import { FindCourseComponent } from './components/find-course/find-course.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


@NgModule({
  declarations: [CoursesComponent, FindCourseComponent, AddCourseComponent, CoursesListComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    SharedModule,
  ],
  exports: [CoursesComponent, FindCourseComponent],
})
export class CoursesModule { }
