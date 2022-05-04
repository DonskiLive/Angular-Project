import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HOME } from '../../../core/constants/routes';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCoursesPage(): void {
    this.router.navigate([HOME])
  }
}
