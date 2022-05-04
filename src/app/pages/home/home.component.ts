import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {COURSES} from '../../core/constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCoursesPage(): void {
    this.router.navigate([COURSES])
  }
}
