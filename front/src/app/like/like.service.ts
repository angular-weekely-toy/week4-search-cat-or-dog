import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  baseUrl = environment.baseUrl;
  headers = { 'x-api-key': environment['x-api-key'] };

  constructor(private http: HttpClient) {}

  getLikeList() {
    return this.http.get(this.baseUrl + '/favourites', {
      headers: this.headers,
    });
  }

  unlike(favourite_id: string) {
    return this.http.delete(this.baseUrl + '/favourites/' + favourite_id, {
      headers: this.headers,
    });
  }
}
