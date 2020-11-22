import { Component, OnInit } from '@angular/core';
import { TransService } from '../services/trans.service';
@Component({
  selector: 'app-dir-bolly',
  templateUrl: './dir-bolly.component.html',
  styleUrls: ['./dir-bolly.component.css']
})
export class DirBollyComponent implements OnInit {

  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getdirbolly().subscribe(response =>{
     this.employees = response;
   } );
  }

}
