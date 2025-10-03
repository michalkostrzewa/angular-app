import { NgModule } from '@angular/core';
import { Tasks } from './tasks';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [Tasks, Task, NewTask],
  exports: [Tasks],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
