import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 
  employees;
 
  title: string;
  constructor(private trans:TransService) { }

  ngOnInit(): void {
   this.trans.getmusic().subscribe(response =>{
     this.employees = response;
   } );
  } 

 
}
