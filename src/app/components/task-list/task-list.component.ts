import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  todoItems: any[] = [];
  doingItems: any[] = [];
  doneItems: any[] = [];
  filteredItems: any[] = [];
  selectedFilter: string = 'todo'; // Filtro predeterminado

  constructor(
    private todoListService: TodoListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.todoListService.getItems().subscribe(
      (response) => {
        this.groupItemsByStatus(response);
        this.applyFilter('todo'); // Establecer 'TODO' como filtro predeterminado
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }

  groupItemsByStatus(items: any[]): void {
    this.todoItems = items;
    this.doingItems = items.filter(item => item.status === 'doing');
    this.doneItems = items.filter(item => item.status === 'done');
  }

  formatDates(items: any[]): any[] {
    return items.map(item => {
      return {
        ...item,
        dueDate: this.formatDate(item.dueDate)
      };
    });
  }
//logica para editar
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  editItem(item: any): void {
    this.router.navigate(['/editar', item.id]);
  }
//logica para borrar
confirmDelete(item: any): void {
  if (confirm('¿Estás seguro de eliminar esta tarea?')) {
    this.todoListService.deleteItem(item.id).subscribe(
      () => {
        console.log('Item deleted:', item);
        window.location.reload();
      },
      (error) => {
        console.error('Error deleting item:', error);
        window.location.reload(); // Recargar la página si hay un error
      }
    );
  }
}


  applyFilter(filter: string): void {
    this.selectedFilter = filter; // Actualizar el filtro seleccionado
    switch (filter) {
      case 'todo':
        this.filteredItems = this.formatDates(this.todoItems);
        break;
      case 'doing':
        this.filteredItems = this.formatDates(this.doingItems);
        break;
      case 'done':
        this.filteredItems = this.formatDates(this.doneItems);
        break;
      default:
        this.filteredItems = this.formatDates([...this.todoItems, ...this.doingItems, ...this.doneItems]);
        break;
    }
  }

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.applyFilter(target.value);
  }
}
