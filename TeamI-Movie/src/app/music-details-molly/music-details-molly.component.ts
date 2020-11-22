import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransService } from '../services/trans.service';

@Component({
  selector: 'app-music-details-molly',
  templateUrl: './music-details-molly.component.html',
  styleUrls: ['./music-details-molly.component.css']
})
export class MusicDetailsMollyComponent implements OnInit {

  employee;
  
 
 

  constructor(private route:ActivatedRoute, private trans:TransService) { }

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   this.trans.getmusicmalayalamlist(id).subscribe(response =>{
     this.employee = response;
   })
   
  
  }
}
