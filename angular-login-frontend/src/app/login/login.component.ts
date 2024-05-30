import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AutenticacionLoginService } from '../autenticacion-login.service';
import { Any } from 'typeorm';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AutenticacionLoginService,
  ) {}
 
  username: string = ''
  password: string = ''
  validate: string = ''
  loading: boolean = false;

  async OnClick() {
    this.loading = true;
    console.log(this.username, this.password)
    const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
    
    // Esperar el timeout antes de continuar
    await delay(2000);
    
    setTimeout(() => {
      this.loading = false;
    }, 2000);
    this.authService.autenticacionUsuario(this.username, this.password, this.validate, this.loading).subscribe(response => {
      console.log(response);
      this.validate = 'Te has logeado correctamente. Éxitos'
    }, error => {
      console.error(error);
      this.validate = 'Error al logear. :('
    });
  }

  // OnClick() {
  //   console.log('hola')
  //   this.authService.autenticacionUsuario(this.username, this.password, this.validate, this.loading).subscribe(response => {
  //     console.log(response)
  //     this.validate = 'Te has logeado correctamente. Éxitos'
  //   }, (error: any) => {
  //     console.error(error);
  //     this.validate = 'Error al logear. :('
  //   })
  // }
}
