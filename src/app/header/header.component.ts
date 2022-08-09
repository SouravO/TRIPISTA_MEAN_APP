import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../authadmin.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthadminService,
    private _router:Router) {

     }

  ngOnInit(): void {
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

