import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AsideComponent } from './components/aside/aside.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { ListasComponent } from './components/listas/listas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveProgrammingComponent } from './components/reactive-programming/reactive-programming.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    ToolbarComponent,
    FooterComponent,
    CardsComponent,
    ListasComponent,
    FormulariosComponent,
    ReactiveProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
