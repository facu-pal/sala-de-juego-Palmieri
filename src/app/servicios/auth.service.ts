import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth();

  //#region Subjects & Observables
  private _isLoggedSub = new BehaviorSubject<boolean>(false);
  public isLoggedObs = this._isLoggedSub.asObservable();
  public get isLogged() {
    return this._isLoggedSub.getValue();
  }
  public set isLogged(value: boolean) {
    this._isLoggedSub.next(value);
  }

  private _loggedUserSub = new BehaviorSubject<User | undefined>(undefined);
  public loggedUserObs = this._loggedUserSub.asObservable();
  public get loggedUser() {
    return this._loggedUserSub.getValue();
  }
  public set loggedUser(value: User | undefined) {
    if (value !== undefined)
      sessionStorage.setItem('loggedUser', JSON.stringify(value));
    else
      sessionStorage.removeItem('loggedUser');

    this._loggedUserSub.next(value);
  }
  //#endregion

  constructor() {
    // Inicializar con el usuario actual, si existe
    const user = this.auth.currentUser;
    if (user) {
      this.isLogged = true;
    }

    // Escuchar el estado de autenticación en tiempo real
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.isLogged = true;
        console.log('Usuario autenticado', user);
      } else {
        this.isLogged = false;
        this.loggedUser = undefined;
        console.log('No hay usuario autenticado');
      }
    });
  }

  public isUserLoggedIn(): boolean {
    return this.isLogged;
  }

}