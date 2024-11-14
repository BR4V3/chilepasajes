import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Dejamos este ijectable para no necesitar llamarlo mas.
@Injectable({
  providedIn: 'root'
})

//Conexion con nuestra api creada y sus endpoint correspondientes.
export class ApiService {

  private apiUrl = 'http://localhost:3000/api/images';

  constructor(private http: HttpClient) {}

  //Obtener una imagen al azar
  getRandomImage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/random`);
  }

  //Obtener una imagen relacionada con el numero que le entreguemos.
  getImagesByNumber(number: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter/${number}`);
  }
}
