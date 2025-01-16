import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-home',
  imports: [CourseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courses: any[] = [];

  ngOnInit(): void {
    this.courses = JSON.parse(localStorage.getItem('COURSES') || '[]');
  }
}
