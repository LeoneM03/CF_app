import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private apiUrl = 'https://apitodo-2yow.onrender.com';
  private apiKey = 'JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRlc3QiLCJpYXQiOjE1MTYyMzkwMjJ9';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': this.apiKey
  });

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`, { headers: this.headers });
  }

  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/${id}`, { headers: this.headers });
  }

  createItem(item: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/items`, item, { headers: this.headers });
  }

  updateItem(id: number, updatedItem: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, updatedItem, { headers: this.headers });
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`, { headers: this.headers });
  }
}
