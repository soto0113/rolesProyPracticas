import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/EstudianteServices/estudiante-services.service';

@Component({
  selector: 'app-cargar-listado',
  templateUrl: './cargar-listado.component.html',
  styleUrls: ['./cargar-listado.component.css']
})
export class CargarListadoComponent implements OnInit {
  estudiantes: any[] = [];

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe(
      (data: any) => {
        this.estudiantes = data;
      },
      (error) => {
        console.error('Error al cargar estudiantes:', error);
      }
    );
  }



}
