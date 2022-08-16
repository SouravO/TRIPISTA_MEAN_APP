import { Component, OnInit } from '@angular/core';
import { GuidesService } from '../guides.service';
import { HotelsService } from '../hotels.service';
import { AuthadminService } from '../authadmin.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-alappuzha',
  templateUrl: './alappuzha.component.html',
  styleUrls: ['./alappuzha.component.css']
})
export class AlappuzhaComponent implements OnInit {
  guides: any;
  hotels:any;

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , autoplay:true, autoplaySpeed:2000};
  images=[
       "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/07/shutterstock_587590211.jpg",    
       "https://tourtoreview.com/wp-content/uploads/2020/07/best-tourist-places-in-el-nido.jpeg",
       "https://c4.wallpaperflare.com/wallpaper/106/555/752/london-england-travel-tourism-wallpaper-preview.jpg",]

  constructor(private hotelService:HotelsService,
      private routes:Router,public _auth:AuthadminService,
      private _router:Router,private guideservice:GuidesService,) { }

  ngOnInit(): void {
    this.loadHotel();
    this.loadGuide();
  }

  loadGuide(){
    this.guideservice.listGuide().subscribe((data)=>{   
      this.guides = data;   
    })   
  }  

  loadHotel(){
    this.hotelService.listHotel().subscribe((data:any)=>{
      // console.log(data);
      this.hotels = data;
    })
  }

}
