import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-molly',
  templateUrl: './hero-molly.component.html',
  styleUrls: ['./hero-molly.component.css']
})
export class HeroMollyComponent implements OnInit {

 
  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getheromalayalam().subscribe(response =>{
     this.employees = response;
   } );
  } 
}
