import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GuidesService {

  constructor(private http:HttpClient) { }

  addGuide(guide:any){
    return this.http.post('http://localhost:8080/endpointss/add-guide', guide)
  }

  listGuide(){
    return this.http.get('http://localhost:8080/endpointss/')
  }
}
