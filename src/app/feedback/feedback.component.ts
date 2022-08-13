import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';
import {FormGroup} from "@angular/forms";  

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit
 {
  enteredTitle="";
  enteredContent ="";
  loading = false;
  // form: FormGroup; 


  addFeedback: any;
  constructor(private fb:FormBuilder,
   private routes:Router,
    private feedbackservice: FeedbackService
    ) { 
      this.addFeedback = fb.group(
        {
          traveller_name:["", Validators.required],
          travel_description:["", Validators.required]
        }
      )
    }

  ngOnInit(): void {
    
    // this.form = new FormGroup({  
      // 'title': new FormControl(null, {validators:[Validators.required, Validators.minLength(3)]})   
      // 'content': new FormControl(null, {validators: [Validators.required]})  
    // });  
  }

  signup_img = "assets/img/gallery/Feedback.webp"

  onSubmit(){
    console.log(this.addFeedback.value);
    this.feedbackservice.addFeedback(this.addFeedback.value).subscribe((data:any)=>{
      // console.log(data);
      this.routes.navigate(['']);
    })
  }

}
