import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionLoginService {
  constructor(
    private http: HttpClient,
  ) { }

  autenticacionUsuario(username: string, password: string, validate: string, loading: boolean) {
    return this.http.post('http://localhost:3000/user/login', {username, password})
  }
}


