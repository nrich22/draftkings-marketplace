import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/core/models/banner';
import { CollectibleDrop } from 'src/app/core/models/collectibleDrops';
import { Nft } from 'src/app/core/models/nft';
import { DraftKingsService } from '../services/draft-kings.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.scss']
})
export class DropsComponent implements OnInit {
  banner!: Banner;
  nfts: Nft[] = [];

  constructor(private dkService: DraftKingsService) { }

  ngOnInit(): void {
    var dropsResponse = this.dkService.getDropsMockData();
    this.banner = dropsResponse.banner;
    this.nfts = dropsResponse.collectibleDrops.map((drop: CollectibleDrop) => {
      return { 
        title: drop.name,
        src: drop.thumbnailUrl,
        price: drop.salePrice,
        creator: drop.partnerName,
        edition: null,
        numberOfEditions: drop.totalQuantity,
        hasAction: drop.hasPreferredAccess,
        action: drop.hasPreferredAccess ? 'Join Drop' : 'Sold Out'
       };
  });

  }

}
