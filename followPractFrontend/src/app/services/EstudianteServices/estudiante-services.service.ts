import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private baseUrl = 'http://localhost:8080/estudiantes/';


  constructor(private http: HttpClient) { }

  obtenerDetalleEstudiante(id: number): Observable<any> {

    const url = `${this.baseUrl}/${id}/`;
    return this.http.get(url);
  }
  getEstudiantes(): Observable<any[]> {

    return this.http.get<any[]>(this.baseUrl);
  }

}
