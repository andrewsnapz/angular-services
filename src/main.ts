import { bootstrapApplication } from '@angular/platform-browser';
// import { InjectionToken } from '@angular/core';

import { AppComponent } from './app/app.component';
// import { TasksService } from './app/tasks/tasks.service';

/*
  environment injector

  cannot tree shake...

  angular tree tries to optimize your app, in the process
  it tries to throw away code that isn't being used.

  when you do it with the providers array, it will always be included
  into your bundle code.

  behind the scenes, angular creates a providers object and creates 
  an injection token of the injectable thing you are trying to register

  the injection token, is usually the name of the service, but
  you can provide your own token.

  'Using Custom DI Tokens and Providers lesson'
*/

// export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');

// bootstrapApplication(AppComponent, {
//   providers: [{ provide: TasksServiceToken, useClass: TasksService }],
// }).catch((err) => console.error(err));

bootstrapApplication(AppComponent).catch((err) => console.error(err));
