import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-details-bolly',
  templateUrl: './hero-details-bolly.component.html',
  styleUrls: ['./hero-details-bolly.component.css']
})
export class HeroDetailsBollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getherobollylist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }

}
