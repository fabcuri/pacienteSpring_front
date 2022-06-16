import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { CadastrarPacientesComponent } from './cadastrar-pacientes/cadastrar-pacientes.component';
import { ConsultarPacientesComponent } from './consultar-pacientes/consultar-pacientes.component';
import { EditarPacientesComponent } from './editar-pacientes/editar-pacientes.component';


const routes: Routes= [
  { path:'cadastrar-pacientes', component: CadastrarPacientesComponent},
  { path:'consultar-pacientes', component: ConsultarPacientesComponent},
  { path:'editar-pacientes/:id', component: EditarPacientesComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    CadastrarPacientesComponent,
    ConsultarPacientesComponent,
    EditarPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
