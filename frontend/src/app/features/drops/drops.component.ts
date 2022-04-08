import { Component, OnInit } from '@angular/core';
import { Nft } from 'src/app/core/models/nft';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.scss']
})
export class DropsComponent implements OnInit {
  nfts: Nft[] = [ 
    { 
      title: 'RareGolfGuys: Born to Read',
      src: 'https://marketplace.draftkings.com/_assets/collectibles/assets/a8cbf2e6-4d39-4779-b68c-eada430de532.png',
      creator: 'DraftKings',
      price: "$100.00",
      edition: null,
      numberOfEditions: 900,
      hasAction: true,
      action: 'Join Drop'
    },
    { 
      title: 'RareGolfGuys: A Winning Tradition',
      src: 'https://marketplace.draftkings.com/_assets/collectibles/assets/83b6136a-eee6-43f1-8426-3068df275efb.png',
      creator: 'DraftKings',
      price: "$720.00",
      edition: null,
      numberOfEditions: 72,
      hasAction: true,
      action: 'Access 4/8 - 9:00 AM'
    },
    { 
      title: 'RareGolfGuys: Cuttin Down Nets',
      src: 'https://marketplace.draftkings.com/_assets/collectibles/assets/88bdbf63-7390-4545-a3fa-8ac80b0a5d62.png',
      creator: 'DraftKings',
      price: "$50.00",
      edition: null,
      numberOfEditions: 2022,
      hasAction: true,
      action: 'Join Drop'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
