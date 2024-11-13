import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible globalmente sin necesidad de importarlo en un módulo
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/images';

  constructor(private http: HttpClient) {}

  // Obtener imagen aleatoria
  getRandomImage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  // Obtener imágenes filtradas por número
  getImagesByNumber(number: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter/${number}`);
  }
}
