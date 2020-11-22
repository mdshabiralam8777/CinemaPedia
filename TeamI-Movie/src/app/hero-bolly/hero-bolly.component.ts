import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-bolly',
  templateUrl: './hero-bolly.component.html',
  styleUrls: ['./hero-bolly.component.css']
})
export class HeroBollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getherobolly().subscribe(response =>{
     this.employees = response;
   } );
  } 

}
