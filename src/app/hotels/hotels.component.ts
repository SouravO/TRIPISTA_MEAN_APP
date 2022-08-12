import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { AuthadminService } from '../authadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels:any;
  constructor(private hotelService:HotelsService
    ,private routes:Router,public _auth:AuthadminService,
    private _router:Router) { }

  ngOnInit(): void {
    this.loadHotel();
  }

  loadHotel(){
    this.hotelService.listHotel().subscribe((data:any)=>{
      // console.log(data);
      this.hotels = data;
    })
  }


  delHotel(datas:any){
    this.hotelService.deleteHotel(datas._id).subscribe(data=>{
      console.log(data);
      this.hotels = this.hotels.filter((u:any)=>u!==datas)
    })
  }

  // search

  searchText: string = "";

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }




}