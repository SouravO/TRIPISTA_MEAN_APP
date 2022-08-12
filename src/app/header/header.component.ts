import { Component, OnInit} from '@angular/core';
import { AuthadminService } from '../authadmin.service';
import {Router} from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    public _auth:AuthadminService,
    private _router:Router) { }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  logoutUser()
  {
    localStorage.removeItem('token')
    this._router.navigate(['/hotels'])
  }
  loggedAdmin()
  {
    this._router.navigate(['/addhotel'])
  }


}

