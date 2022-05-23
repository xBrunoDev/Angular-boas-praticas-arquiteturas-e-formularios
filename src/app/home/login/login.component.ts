import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private Router : Router
    ){ }

  ngOnInit(): void { }

  login() {
    this.authService.autenticar(this.usuario,this.senha).subscribe(() => {
      console.log('Autenticado com sucesso');
    }, (error) => {
      alert('usuario ou senha invalido');
      console.log(error)
    }
    )
  }

}
