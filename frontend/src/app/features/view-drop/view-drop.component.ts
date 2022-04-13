import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectibleDrop } from 'src/app/core/models/collectibleDrops';
import { DraftKingsService } from '../services/draft-kings.service';

@Component({
  selector: 'app-view-drop',
  templateUrl: './view-drop.component.html',
  styleUrls: ['./view-drop.component.scss']
})
export class ViewDropComponent implements OnInit {
  dropId!: number;
  collectibleDrop!: CollectibleDrop;

  constructor(
    private route: ActivatedRoute,
    private dkService: DraftKingsService) 
    { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.dropId = params['id'];
      }
    );

    if (this.dropId) {
      this.dkService.getDropById(this.dropId).subscribe(drop => {
        this.collectibleDrop = drop;
      })
    }
  }

  buyNow() {
    
  }

}
