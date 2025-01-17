import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectInterface } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  imports: [NgFor, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  Projects: ProjectInterface[] = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a description of project 1',
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is a description of project 2',
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is a description of project 3',
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'This is a description of project 4',
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'This is a description of project 5',
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'This is a description of project 6',
    },
    {
      id: 7,
      name: 'Project 7',
      description: 'This is a description of project 7',
    },
    {
      id: 8,
      name: 'Project 8',
      description: 'This is a description of project 8',
    },
  ];
}
