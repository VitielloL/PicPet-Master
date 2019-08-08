import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Usuario } from './usuario.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(public loginS: LoginService, public fb: FormBuilder, public router: Router,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.userForm = this.fb.group(new Usuario());
  }

  fazerLogin() {
    if (this.loginS.encontrarUsuario(this.userForm.value.user, this.userForm.value.senha)) {
      sessionStorage.setItem('user', this.userForm.value.user);
      this.router.navigate(['home']);
      this.mostrarMsg('Usuário encontrado, pode prosseguir!', 3000);
    } else {
      this.mostrarMsg('Usuário não encontrado!', 3000);
    }
  }

  mostrarMsg(msg, drt) {
    this.snackBar.open(msg, 'Ok', {
      duration: drt
    });
  }

}
