import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-hero-tollydetails',
  templateUrl: './hero-tollydetails.component.html',
  styleUrls: ['./hero-tollydetails.component.css']
})
export class HeroTollydetailsComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getherotelugulist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }
}
