import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthadminService } from './authadmin.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req:any,nxt:any)
    {
      let authadminService = this.injector.get(AuthadminService)
      let tokenizedReq=req.clone(
        {
          setHeader:{
            Authorization:`Bearer ${authadminService.getToken()}`
          }
        }
      )
      return nxt.handle(tokenizedReq)
    }

}
