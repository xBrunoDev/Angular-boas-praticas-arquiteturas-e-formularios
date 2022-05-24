import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService:NovoUsuarioService) { }

  usuarioJaExiste() {
    debugger
    return (control:AbstractControl)=> {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario)=>
        this.novoUsuarioService.verificarUsuarioExistente(nomeUsuario)
      ),
      map((usuarioExiste)=>
      usuarioExiste ? {usuarioExistente:true} : null
      ),
      first()
      );
  };
}
}
