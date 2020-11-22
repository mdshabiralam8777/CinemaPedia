import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-movie-details-molly',
  templateUrl: './movie-details-molly.component.html',
  styleUrls: ['./movie-details-molly.component.css']
})
export class MovieDetailsMollyComponent implements OnInit {

  employee;
  employees;
 
   constructor(private route:ActivatedRoute, private trans:TransService) { }
 
   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.trans.getmoviemalayalamlist(id).subscribe(response =>{
      this.employee = response;
    })
   }

}
