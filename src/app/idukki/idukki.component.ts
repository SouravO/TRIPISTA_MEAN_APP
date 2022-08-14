import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idukki',
  templateUrl: './idukki.component.html',
  styleUrls: ['./idukki.component.css']
})
export class IdukkiComponent implements OnInit {
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1 , autoplay:true, autoplaySpeed:2000};
  images=[
       "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/07/shutterstock_587590211.jpg",    
       "https://tourtoreview.com/wp-content/uploads/2020/07/best-tourist-places-in-el-nido.jpeg",
       "https://c4.wallpaperflare.com/wallpaper/106/555/752/london-england-travel-tourism-wallpaper-preview.jpg",]

  constructor() { }

  ngOnInit(): void {
  }
}
