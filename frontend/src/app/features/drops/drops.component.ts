import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/core/models/banner';
import { CollectibleDrop } from 'src/app/core/models/collectibleDrops';
import { DraftKingsService } from '../services/draft-kings.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.scss']
})
export class DropsComponent implements OnInit {
  banner!: Banner;
  collectibleDrops!: CollectibleDrop[];

  constructor(private dkService: DraftKingsService) { }

  ngOnInit(): void {
    this.dkService.getBanner().subscribe(bannerData => {
      this.banner = bannerData;
    });

    this.dkService.getDrops().subscribe(drops => {
      this.collectibleDrops = drops;
    });
  }
}
