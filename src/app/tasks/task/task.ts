import { Component, Input } from '@angular/core';
import { TaskType } from './taks.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
}
