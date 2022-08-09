import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http:HttpClient) { }

addHotel(hotel:any){
  return this.http.post('http://localhost:8080/endpoint/addhotel',hotel);
}

listHotel(){
  return this.http.get('http://localhost:8080/endpoint/');
}

deleteHotel(id:any){
  return this.http.delete('http://localhost:8080/endpoint/deletehotel/'+id);
}

singleHotel(id:any){
  return this.http.get('http://localhost:8080/endpoint/hotel/'+id);
}

updateHotel(id:any,hotel:any){
  return this.http.put('http://localhost:8080/endpoint/updatehotel/'+id,hotel);

}

}

