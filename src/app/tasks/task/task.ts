import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './taks.model';
import { Card } from '../../shared/card/card';

@Component({
  selector: 'app-task',
  imports: [Card],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  @Output() complete = new EventEmitter<string>();

  onCompliteTask() {
    this.complete.emit(this.task.id);
  }
}
