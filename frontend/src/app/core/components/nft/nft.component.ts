import { Component, Input, OnInit } from '@angular/core';
import { CollectibleDrop } from '../../models/collectibleDrops';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  @Input() collectibleDrop!: CollectibleDrop;

  constructor() { }

  ngOnInit(): void {
  }

}
