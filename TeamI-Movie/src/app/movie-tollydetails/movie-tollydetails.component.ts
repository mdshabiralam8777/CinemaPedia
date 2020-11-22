import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-movie-tollydetails',
  templateUrl: './movie-tollydetails.component.html',
  styleUrls: ['./movie-tollydetails.component.css']
})
export class MovieTollydetailsComponent implements OnInit {
  employee;
 employees;

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getmovietelugulist(id).subscribe(response =>{
     this.employee = response;
   })
  }

}
