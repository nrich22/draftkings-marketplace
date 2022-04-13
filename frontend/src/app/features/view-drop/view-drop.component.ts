import { Component, Input, OnInit } from '@angular/core';
import { CollectibleDrop } from 'src/app/core/models/collectibleDrops';

@Component({
  selector: 'app-view-drop',
  templateUrl: './view-drop.component.html',
  styleUrls: ['./view-drop.component.scss']
})
export class ViewDropComponent implements OnInit {
  collectibleDrop!: CollectibleDrop;

  constructor() { }

  ngOnInit(): void {
  }

}
