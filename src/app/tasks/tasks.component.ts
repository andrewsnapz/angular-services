import { Component } from '@angular/core';

import { NewTaskComponent } from './new-task/new-task.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
// import { TasksService } from './tasks.service';

// Element injector
// elements not in the template will not have access to this serivce (like the app component)
// every instance of this component will get its own service instance
@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  imports: [NewTaskComponent, TasksListComponent],
  // providers: [TasksService], // this component and all components in the template will have access to the specified service
})
export class TasksComponent {}
