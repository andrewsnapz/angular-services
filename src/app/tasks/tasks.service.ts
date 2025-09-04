import { inject, Injectable, signal } from '@angular/core';

import { type TaskStatus, type Task } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();

  addTask(taskData: { title: string; description: string }) {
    this.tasks.update((oldTasks) => {
      const newTask: Task = {
        id: Math.random().toString(),
        title: taskData.title,
        description: taskData.description,
        status: 'OPEN',
      };
      return [...oldTasks, newTask];
    });

    this.loggingService.log('Added task with title ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks) => {
      return oldTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
    });

    this.loggingService.log('change task  status to ' + newStatus);
  }
}
