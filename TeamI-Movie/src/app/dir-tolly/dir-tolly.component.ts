import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-dir-tolly',
  templateUrl: './dir-tolly.component.html',
  styleUrls: ['./dir-tolly.component.css']
})
export class DirTollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getdirtolly().subscribe(response =>{
     this.employees = response;
   } );
  }
}
