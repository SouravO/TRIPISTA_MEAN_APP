import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuidesService } from '../guides.service';

@Component({
  selector: 'app-guide-reg',
  templateUrl: './guide-reg.component.html',
  styleUrls: ['./guide-reg.component.css']
})
export class GuideRegComponent implements OnInit {

  addGuide:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private guideservice:GuidesService
    ) {
      this.addGuide = fb.group(
        {
          first_name:['',Validators.required],
          last_name:['',Validators.required],
          district:['',Validators.required],
          state:['',Validators.required],
          gender:['',Validators.required],
          email:['',Validators.required],
          phone:['',Validators.required],
          dob:['',Validators.required],
          id_proof:['',Validators.required],
          biodata:['',Validators.required]
        }
      )
    }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addGuide.value);
    this.guideservice.addGuide(this.addGuide.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/guides']);
    })
  }

  signup_img = "./assets/img/illustrations/tour-guide-pana.png"

}
