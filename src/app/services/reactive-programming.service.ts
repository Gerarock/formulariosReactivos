import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Alumnos } from '../models/alumnos.model';

@Injectable({
  providedIn: 'root'
})
export class ReactiveProgrammingService {

  searchAlumn$ = new BehaviorSubject<string>('');
  filteredStudentList$: Observable<Alumnos[]> | undefined;

  private studentList: Alumnos[] = [
    new Alumnos(1, 25, 'Gerardo', 'Veliz', 'direccion 3736', ''),
    new Alumnos(2, 30, 'Gonzalo', 'Vega', 'direccion 67543', ''),
    new Alumnos(3, 27, 'Sebastian', 'Ignacio', 'direccion 34323', ''),
    new Alumnos(4, 20, 'Alonso', 'Gonzalez', 'direccion 34321', ''),
    new Alumnos(5, 25, 'Tomas', 'Duran', 'direccion 86567', ''),
    new Alumnos(6, 30, 'Nicolas', 'Poblete', 'direccion 72595', ''),
    new Alumnos(7, 27, 'Patricio', 'Lizana', 'direccion 24964', ''),
    new Alumnos(8, 27, 'Carla', 'Poblete', 'direccion 72565', ''),
    new Alumnos(9, 29, 'David', 'Rojas', 'direccion 73322', ''),
    new Alumnos(10, 30, 'Constanza', 'Maella', 'direccion 4342', ''),
    new Alumnos(11, 35, 'Antonio', 'Castro', 'direccion 12223', ''),
    new Alumnos(12, 22, 'Carolina', 'Espinoza', 'direccion 32313', '')
  ];

  constructor() {
    this.filteredList();
  }

  getAlumn(alumn: any) {
    this.searchAlumn$.next(alumn);
  }

  filteredList(): void {
    this.filteredStudentList$ = this.searchAlumn$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        map(term => {
          return this.studentList
            .filter(item => item.nombre.toLowerCase().indexOf(term.toLowerCase()) >= 0);
        })
      );
  }

}
