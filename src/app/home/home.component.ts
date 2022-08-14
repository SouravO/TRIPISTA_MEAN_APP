import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , autoplay:true, autoplaySpeed:2000};
  feedbacks: any;

  constructor( private feedbackservice:FeedbackService 
    ,private routes:Router
    ) { }

  ngOnInit(): void {
    this.loadFeedback();

    

  }
  
  loadFeedback(){
    this.feedbackservice.listFeedback().subscribe((data:any)=>{
      // console.log(data)
      this.feedbacks = data;
    })
  }
  
  img_url = "./assets/public/img/gallery/maldives.jpg"
}
