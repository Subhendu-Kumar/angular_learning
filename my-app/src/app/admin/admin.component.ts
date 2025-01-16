import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseCardComponent } from '../course-card/course-card.component';

@Component({
  selector: 'app-admin',
  imports: [FormsModule, NgIf, CourseCardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  model: any = {};
  courses: any[] = [];
  imgError: boolean = false;
  selectedImage: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    this.courses = JSON.parse(localStorage.getItem('COURSES') || '[]');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedImage = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedImage);
      this.imgError = false;
    }
  }

  saveCourse(value: any) {
    console.log(value);
    const data = {
      ...value,
      imgUrl: this.imagePreview,
    };
    let course = JSON.parse(localStorage.getItem('COURSES') || '[]');
    course.push(data);
    localStorage.setItem('COURSES', JSON.stringify(course));
    this.courses = course;
  }

  submitForm(form: NgForm) {
    if (form.invalid && !this.selectedImage) {
      form.control.markAllAsTouched();
      this.imgError = true;
      return;
    } else {
      this.saveCourse(form.value);
      form.resetForm();
      this.imagePreview = null;
      this.selectedImage = null;
      this.model = {};
    }
  }
}
