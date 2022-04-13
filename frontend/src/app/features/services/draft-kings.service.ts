import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/core/services/data.service';
import { Banner } from 'src/app/core/models/banner';
import { CollectibleDrop } from 'src/app/core/models/collectibleDrops';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftKingsService extends DataService{

  constructor(http: HttpClient) {
    super(http);
  }

  getBanner(): Observable<Banner> {
    return super._get<Banner>(`marketplace/banner/`);
  }

  getDrops(): Observable<CollectibleDrop[]> {
    return super._get<CollectibleDrop[]>(`marketplace/drops/`);
  }
}
