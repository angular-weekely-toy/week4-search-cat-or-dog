import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from '../../environments/environment';
import { Breed } from '../models/breed';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  baseUrl = environment.baseUrl;
  breedList$ = new Subject<Breed[]>();

  constructor(private http: HttpClient) {
    this.getBridList().subscribe((breedList: any) =>
      this.breedList$.next(breedList)
    );
  }

  getBridList() {
    return this.http.get(this.baseUrl + '/breeds');
  }
}
