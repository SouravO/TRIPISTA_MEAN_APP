import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { AuthadminService } from './authadmin.service';
@Injectable({
  providedIn: 'root'
})
export class AuthadminGuard implements CanActivate {
  constructor(private _auth:AuthadminService,
              private _router:Router){}

  canActivate():boolean{
    if (this._auth.adminloggedIn())
      {
        console.log('true')
        return true
      }
    else{
      this._router.navigate(['/hotels'])
      return false
    }
  }
   
}
