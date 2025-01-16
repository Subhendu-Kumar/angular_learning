import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input() course: any;

  getTruncatedText(text: string, wordLimit: number): string {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  }
}
