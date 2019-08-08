import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usuario = [
    new Usuario('u1', 'gkojima', '1234'),
    new Usuario ('u2', 'sonyunlucky', '1234')
  ];

  constructor() {}

  encontrarUsuario(login: string, senha: string) {
    let achou = false;
    this.usuario.map(user => {
      if (user.user === login && user.senha === senha) {
        achou = true;
      }
    });
    return achou;
  }

}
