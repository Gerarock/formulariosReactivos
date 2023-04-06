import { Component } from '@angular/core';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {

  public flag: boolean = false;

  public alumnosArray: Alumnos[] = [
    new Alumnos(1, 25, 'Gerardo', 'Veliz', 'direccion 3736', '../../../assets/img/alumno-1.png'),
    new Alumnos(2, 30, 'Gonzalo', 'Vega', 'direccion 67543', '../../../assets/img/alumno-2.png'),
    new Alumnos(3, 27, 'Sebastian', 'Ignacio', 'direccion 34323', '../../../assets/img/alumno-3.png'),
    new Alumnos(4, 20, 'Alonso', 'Gonzalez', 'direccion 34321', '../../../assets/img/alumno-4.png'),
    new Alumnos(5, 25, 'Tomas', 'Duran', 'direccion 86567', '../../../assets/img/alumno-5.png'),
    new Alumnos(6, 30, 'Nicolas', 'Poblete', 'direccion 72595', '../../../assets/img/alumno-6.png'),
    new Alumnos(7, 27, 'Patricio', 'Lizana', 'direccion 24964', '../../../assets/img/alumno-7.png'),
    new Alumnos(8, 20, 'David', 'Rojas', 'direccion 72565', '../../../assets/img/alumno-8.png')
  ];

  selectAlumno() {
    this.flag = !this.flag;
  }

}
