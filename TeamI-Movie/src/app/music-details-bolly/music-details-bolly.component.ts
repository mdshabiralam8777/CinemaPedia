import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-music-details-bolly',
  templateUrl: './music-details-bolly.component.html',
  styleUrls: ['./music-details-bolly.component.css']
})
export class MusicDetailsBollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getmusicbollylist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }

}
