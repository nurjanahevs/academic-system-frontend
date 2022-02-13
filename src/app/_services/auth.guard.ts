import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthServiceService } from './auth-service.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth();
    console.log(isAuth)
    if (!isAuth) {
      Swal.fire({
        icon: 'error',
        title: "You're Not Authenticated!",
        text: "You Doesn't Have Access This Page!",
        showConfirmButton: false,
        timer: 2500,
      });
      this.router.navigate(['/login']);
      return isAuth;
    }
    return isAuth;
  }
}
