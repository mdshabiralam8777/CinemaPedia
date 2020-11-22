import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-tolly',
  templateUrl: './hero-tolly.component.html',
  styleUrls: ['./hero-tolly.component.css']
})
export class HeroTollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getherotelugu().subscribe(response =>{
     this.employees = response;
   } );
  } 
}
