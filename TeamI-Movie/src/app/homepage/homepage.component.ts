import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  imageObject = [
    {
      video: 'https://www.youtube.com/watch?v=qfr0NUD3FTU',
      thumbImage:
        'https://i.imgur.com/UzGNrmz.png',
      title: 'Mahabharat',
    },
    {
      video: 'https://www.youtube.com/watch?v=q1u0hzLuDCw',
      thumbImage:
        'https://i.imgur.com/8Elr9Du.png',
      title: 'Iron Mask',
    },
    {
      video: 'https://www.youtube.com/watch?v=Srp90Hp0G70',
      thumbImage:
        'https://i.imgur.com/zl1WCdh.png',
      title: 'Ludo',
    },
    {
      video: 'https://www.youtube.com/watch?v=hfPXhhPFtGQ',
      thumbImage:
        'https://i.imgur.com/KZfttOK.png',
      title: 'Justice League 2',
    },
    {
      video: 'https://www.youtube.com/watch?v=rovLs3lIjyo',
      thumbImage:
        'https://i.imgur.com/BZKImEi.png',
      title: 'Dragon Ball Z',
    },
    {
      video: 'https://www.youtube.com/watch?v=NXSigiaZ0W0',
      thumbImage:
        'https://i.imgur.com/CbWQ9TB.png',
      title: 'Vikram',
    },
    {
      video: 'https://www.youtube.com/watch?v=hmbXOtcYMck',
      thumbImage:
        'https://i.imgur.com/mDxMDCI.png',
      title: 'Transformers 7',
    },
    {
      video: 'https://www.youtube.com/watch?v=B2U_zWtp9aI',
      thumbImage:
        'https://i.imgur.com/MflUYPq.png',
      title: 'Annathe',
    },
    {
      video: 'https://www.youtube.com/watch?v=WX9TDlEoQFo',
      thumbImage:
        'https://i.imgur.com/sEdvwis.png',
      title: 'Nerkonda Paarvai',
    },
    {
      video: 'https://www.youtube.com/watch?v=kP9TfCWaQT4',
      thumbImage:
        'https://i.imgur.com/12uRTc6.png',
      title: 'Tom and Jerry',
    }
  ];
}
