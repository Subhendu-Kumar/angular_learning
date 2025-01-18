import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProjectInterface } from '../../../../interfaces/project.interface';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  imports: [FormsModule, NgIf],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css',
})
export class EditProjectComponent {
  model: ProjectInterface = { id: 0, name: '', description: '' };
  isSaved: boolean = false;

  save(form: NgForm) {
    this.isSaved = true;
    alert('Project saved successfully!');
  }

  canDeactive(): boolean | Observable<boolean> {
    if (!this.isSaved) {
      return confirm(
        'You have an unsaved changes. Do you really want to leave??'
      );
    }
    return true;
  }
}
