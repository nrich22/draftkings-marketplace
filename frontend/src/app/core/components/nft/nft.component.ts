import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectibleDrop } from '../../models/collectibleDrops';

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss']
})
export class NftComponent implements OnInit {
  @Input() collectibleDrop !: CollectibleDrop;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewDrop(dropId: number) {
    this.router.navigate(['/', 'drop'], { queryParams: { id: dropId } });
  }
}
