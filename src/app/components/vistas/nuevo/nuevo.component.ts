import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
  taskName: string = '';
  taskDescription: string = '';
  dueDate: string = '';
  taskStatus: string = 'todo';

  constructor(private todoListService: TodoListService, private router: Router) { }

  createTask(): void {
    const newTask = {
      name: this.taskName,
      description: this.taskDescription,
      dueDate: this.dueDate,
      status: this.taskStatus
    };

    this.todoListService.createItem(newTask).subscribe(
      (response) => {
        console.log('New task created:', response);
        this.router.navigate(['/dashboard']); // Redirigir a Dashboard después de crear la tarea
      },
      (error) => {
        console.error('Error creating task:', error);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/dashboard']); // Redirigir a Dashboard sin crear la tarea
  }
}