import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos } from 'src/app/models/alumnos.model';
import { ReactiveProgrammingService } from 'src/app/services/reactive-programming.service';

@Component({
  selector: 'app-reactive-programming',
  templateUrl: './reactive-programming.component.html',
  styleUrls: ['./reactive-programming.component.css']
})
export class ReactiveProgrammingComponent implements OnInit {

  public dataAlumn: Observable<Alumnos[]> | undefined;

  constructor(private reactiveProgrammingService: ReactiveProgrammingService) { }

  ngOnInit(): void {
    this.dataAlumn = this.reactiveProgrammingService.filteredStudentList$;
  }

  searchAlumn(data: any) {
    this.reactiveProgrammingService.getAlumn(data.target.value);
  }

}
