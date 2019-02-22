import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticarGuardGuard implements CanActivate {

  public static podeAcessar = false;

  constructor(private rotas:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!AutenticarGuardGuard.podeAcessar){
        this.rotas.navigateByUrl("/login");
      }
    return AutenticarGuardGuard.podeAcessar;
  }
}
