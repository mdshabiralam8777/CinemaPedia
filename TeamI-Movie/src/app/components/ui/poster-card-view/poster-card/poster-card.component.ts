import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.css']
})
export class PosterCardComponent implements OnInit {

  constructor() { }
  @Input() public model: any;

  ngOnInit(): void {
  }

}
