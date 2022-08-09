import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor( private http:HttpClient  ) { }
  addFeedback(feedback:any){
    return this.http.post("http://localhost:8080/endpoints/feedback",feedback);
  }
    listFeedback(){
    return this.http.get("http://localhost:8080/endpoints/");
  }

}
