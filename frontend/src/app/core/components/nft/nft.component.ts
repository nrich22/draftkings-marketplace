import { Component, Input, OnInit } from '@angular/core';
import { Nft } from '../../models/nft';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  @Input() nft!: Nft;

  constructor() { }

  ngOnInit(): void {
  }

}
