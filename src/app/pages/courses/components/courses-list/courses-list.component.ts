import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../../core/models/course_model';
import {COURSES, EDIT_COURSE} from '../../../../core/constants/routes';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  public loadMore: boolean = false;
  public preShowNumber: number = 2;

  @Input() courses!: Course[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadMoreToggle(): void {
    this.loadMore = !this.loadMore
  }

  openCourseEdit(id: number): void {
    this.router.navigate([`${COURSES}/${EDIT_COURSE}`, id])
  }
}
