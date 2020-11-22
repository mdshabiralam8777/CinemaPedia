import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  statusOrder(){
    alert(' You will receive your tracking status to your respective Email ID')
  }

}
