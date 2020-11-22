import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-tollydetails',
  templateUrl: './tollydetails.component.html',
  styleUrls: ['./tollydetails.component.css']
})
export class TollydetailsComponent implements OnInit {

  employee;
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getlist(id).subscribe(response =>{
     this.employee = response;
   })
  }
  
}
