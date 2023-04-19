import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { ListasComponent } from './components/listas/listas.component';
import { ReactiveProgrammingComponent } from './components/reactive-programming/reactive-programming.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'listas',
    component: ListasComponent
  },
  {
    path: 'formularios',
    component: FormulariosComponent
  },
  {
    path: 'reactive-programming',
    component: ReactiveProgrammingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
