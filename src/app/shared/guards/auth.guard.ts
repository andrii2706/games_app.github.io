import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarComponent} from "../components/snackbar/snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   isLogin: boolean;
  constructor( private authService: AuthService, private router: Router, private snackbar: MatSnackBar) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.LoginStatus){
     void state.url
      return true
    }else{
      this.snackbar.openFromComponent(SnackbarComponent, {
        duration: 5000,
        data:'You are not login yet.',
        verticalPosition: 'top',
        horizontalPosition: "center"
      })
      void this.router.navigateByUrl('/login')
      return false
    }
  }

}
