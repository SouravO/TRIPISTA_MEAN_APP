import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelsService } from '../hotels.service';


@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  addHotel:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private hotelsservice:HotelsService
    ) { 
      this.addHotel = fb.group(
        {
          hotelName:['',Validators.required],
          hotelStarrating:['',Validators.required],
          hotelPrice:['',Validators.required],
          hotelAddress:['',Validators.required],
          hotelContact:['',Validators.required],
          hotelWebsite:['',Validators.required],
          hotelImageUrl:['',Validators.required],
        }
      )


    }



  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.addHotel.value);
    this.hotelsservice.addHotel(this.addHotel.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/hotels']);
    })
  }


}
