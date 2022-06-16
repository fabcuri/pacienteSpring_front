import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consultar-pacientes',
  templateUrl: './consultar-pacientes.component.html',
  styleUrls: ['./consultar-pacientes.component.css']
})
export class ConsultarPacientesComponent implements OnInit {

  pacientes: any[]=[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl+'/pacientes').subscribe
    ((data)=>{
      this.pacientes= data as any[];

    },
    (e)=> {
      console.log(e);
    }
    )
  }
  excluir(idPaciente:number):void{
    if(window.confirm('Deseja realmente excluir o paciente selecionado?')){
      this.httpClient.delete(environment.apiUrl+"/pacientes/"+idPaciente,
     { responseType : 'text'})
     .subscribe(
        (data)=>{
          alert(data);
          this.ngOnInit();
        },
        (e)=>{
          console.log(e);
        }
     )
    }
  }

}
