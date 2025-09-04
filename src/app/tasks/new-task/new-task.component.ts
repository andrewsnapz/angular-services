import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  /*
    it's important to understand that, we don't create
    instances of our services ourselves, but we let
    Angular do it.
  */

  /* 
   TasksService is a Injection Token, which is
   used by angular to identify the 'thing'
   it should create and inject.

   it's angular's job to configure the params for us.

   when we do it this way, we ensure that there's only
   one shared instance of this service that's shared with
   our other components
  */
  constructor(private tasksService: TasksService) {}

  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}
