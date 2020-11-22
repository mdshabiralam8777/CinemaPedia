import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-herodetils-ta',
  templateUrl: './herodetils-ta.component.html',
  styleUrls: ['./herodetils-ta.component.css']
})
export class HerodetilsTaComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getherotalist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }
}
