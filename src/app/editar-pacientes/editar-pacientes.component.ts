import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.css'],
})
export class EditarPacientesComponent implements OnInit {
  mensagem: string = '';

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //capturar o id enviado pela URL
    const idPaciente = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //consultar o produto na API através do ID
    this.httpClient
      .get(environment.apiUrl + '/pacientes/' + idPaciente)
      .subscribe(
        (data: any) => {
          //preenchendo os campos do formulario com os dados do produto
          this.formEdicao.patchValue(data);
        },
        (e) => {
          console.log(e);
        }
      );
  }
  //montando a estrutura do formulario
  formEdicao = new FormGroup({
    //campos do formulario ..serao os mesmos campos que temos na consulta, iremos acrescentar o id

    idPaciente: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', [Validators.required]),
    sexo: new FormControl('', [Validators.required]),
  });
  get form(): any {
    return this.formEdicao.controls;
  }

  onSubmit(): void {
    this.httpClient.put(environment.apiUrl + '/pacientes', this.formEdicao.value,{responseType:'text'}).subscribe(data => {
      this.mensagem = data;

    },
    e =>{
      this.mensagem = " Ocorreu um erro ao tentar editar o paciente";
      console.log(e);
    }
    );
  }
}