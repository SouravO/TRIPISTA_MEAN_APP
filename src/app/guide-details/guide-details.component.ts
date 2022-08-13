import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuidesService } from '../guides.service';

@Component({
  selector: 'app-guide-details',
  templateUrl: './guide-details.component.html',
  styleUrls: ['./guide-details.component.css']
})
export class GuideDetailsComponent implements OnInit {

  guides: any;
  constructor(private guideservice:GuidesService
    ,private routes:Router
    ) { }

  ngOnInit(): void {
    this.loadGuide();
  }

  loadGuide(){
    this.guideservice.listGuide().subscribe((data)=>{
      console.log(data);
      this.guides = data;

    })
  }


}
