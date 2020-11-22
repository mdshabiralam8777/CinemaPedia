import { TransService } from '../services/trans.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-actorsdetails',
  templateUrl: './actorsdetails.component.html',
  styleUrls: ['./actorsdetails.component.css']
})
export class ActorsdetailsComponent implements OnInit {
 employee;
 employees;

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getDatas(id).subscribe(response =>{
     this.employee = response;
   })
  }
  

}
