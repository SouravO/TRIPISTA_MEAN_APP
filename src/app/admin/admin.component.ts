import { Component, OnInit } from '@angular/core';
import { AuthadminService } from '../authadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user={uname:'',
  password:''}

  constructor(private _auth:AuthadminService, private _router:Router) { }

  ngOnInit(): void {
  }
loginAdmin()
{
  this._auth.loginAdmin(this.user)
  .subscribe(
    res => {
      localStorage.setItem('token', res.token)
      this._router.navigate(['/addhotel'])
    }
  )
 

}
}
