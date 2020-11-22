import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-directors-tolly',
  templateUrl: './directors-tolly.component.html',
  styleUrls: ['./directors-tolly.component.css']
})
export class DirectorsTollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getmusictelugu().subscribe(response =>{
     this.employees = response;
   } );
  }

  

}
