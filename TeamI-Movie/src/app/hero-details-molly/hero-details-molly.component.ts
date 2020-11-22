import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-details-molly',
  templateUrl: './hero-details-molly.component.html',
  styleUrls: ['./hero-details-molly.component.css']
})
export class HeroDetailsMollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getheromalayalamlist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }
}
