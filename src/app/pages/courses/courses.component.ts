import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../core/services/courses_data_service';
import { Course } from '../../core/models/course_model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses!: Course[]

  constructor(private readonly coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
