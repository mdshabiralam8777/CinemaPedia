import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-ta',
  templateUrl: './hero-ta.component.html',
  styleUrls: ['./hero-ta.component.css']
})
export class HeroTaComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getherota().subscribe(response =>{
     this.employees = response;
   } );
  } 


}
