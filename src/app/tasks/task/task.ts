import { Component, Input, inject } from '@angular/core';
import { TaskType } from './taks.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  private tasksService = inject(TasksService);
  onCompliteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
