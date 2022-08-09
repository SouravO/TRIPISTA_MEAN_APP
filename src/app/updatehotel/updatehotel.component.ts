import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-updatehotel',
  templateUrl: './updatehotel.component.html',
  styleUrls: ['./updatehotel.component.css']
})
export class UpdatehotelComponent implements OnInit {

  addHotel:any;
  id:any;
  constructor(private fb:FormBuilder,
    private routes:Router,
    private hotelsservice:HotelsService,
    private url:ActivatedRoute
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
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.hotelsservice.singleHotel(this.id).subscribe(data=>{
      this.addHotel.patchValue(data);
    })
  }


  onSubmit(){
    console.log(this.addHotel.value);
    this.hotelsservice.updateHotel(this.id,this.addHotel.value).subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/hotels']);
    })
  }

}
