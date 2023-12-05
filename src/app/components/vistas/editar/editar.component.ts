import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importar Router
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  editedTask: any = {}; // Objeto para almacenar los detalles editados de la tarea
  errorUpdatingTask: boolean = false;
  confirmedSave: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private todoListService: TodoListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const taskId = +params['id']; //obtiene el id 
       this.getTaskDetails(taskId);
    });
  }

  getTaskDetails(taskId: number): void {
    this.todoListService.getItem(taskId).subscribe(
      (task) => {
        this.editedTask = task; // almacena datos
       },
      (error) => {
        console.error('Error fetching task details:', error);
      }
    );
  }

  confirmSave(): void {
    if (window.confirm('¿Estás seguro de guardar los cambios?')) {
      this.saveChanges();
    }
  } 
  saveChanges(): void {
    if (window.confirm('¿Estás seguro de guardar los cambios?')) {
      this.confirmedSave = true;
      this.todoListService.updateItem(this.editedTask.id, this.editedTask).subscribe(
        () => {
          console.log('Task updated successfully:', this.editedTask);
          this.router.navigate(['/dashboard']); // Redirigir a Dashboard después de guardar
        },
        (error) => {
          console.error('Error updating task:', error);
          if (error.status === 422) {
            this.errorUpdatingTask = true; // Establecer errorUpdatingTask en true si hay un error de validación
          }
        }
      );
    }
  }

  
  cancel(): void {
    this.router.navigate(['/dashboard']); // Redirigir a Dashboard sin ediar
  }
}