import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-movies-details-bolly',
  templateUrl: './movies-details-bolly.component.html',
  styleUrls: ['./movies-details-bolly.component.css']
})
export class MoviesDetailsBollyComponent implements OnInit {

  employee;
  employees;
 
   constructor(private route:ActivatedRoute, private trans:TransService) { }
 
   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.trans.getmoviebollylist(id).subscribe(response =>{
      this.employee = response;
    })
   }

}
