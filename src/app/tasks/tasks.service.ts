import { Injectable, signal } from '@angular/core';

import { type Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = signal<Task[]>([]);

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
  }
}
