import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TransService } from '../services/trans.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

 
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
   
  }

 

 /* lang;

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
   changeLang(lang){
   localStorage.setItem('lang',lang);
   window.location.reload();
  }*/
  onclick(): void {
    this.router.navigate(['/section2']);
  }


}
