import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { HomeComponent } from './pages/home/home.component';
import { HOME, COURSES, EDIT_COURSE } from './core/constants/routes';

const routes: Routes = [
  { path: '', redirectTo: HOME, pathMatch: 'full' },
  { path: HOME, component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: COURSES, component: CoursesComponent, data: { breadcrumb: 'Courses' }, children: [
      { path: `${EDIT_COURSE}/:id`, component: CourseDetailComponent, data: { breadcrumb: "Edit Course" } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
