import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AboutService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBreedInfo(breed_id: string) {
    return this.http.get(this.baseUrl + '/images/search', {
      params: {
        breed_id,
      },
    });
  }

  getPictures(breed_id: string, page = 1, limit = 10) {
    const params = {
      breed_id,
      size: 'thumb',
      page,
      limit,
    };
    return this.http
      .get(this.baseUrl + '/images/search', {
        params,
      })
      .pipe(
        map((res: any) =>
          res.map((item: any) => ({
            breeds: {
              ...item.breeds[0],
              image: {
                id: item.id,
                width: item.width,
                height: item.height,
                url: item.url,
              },
            },
          }))
        )
      );
  }

  like(image_id: string) {
    const body = {
      image_id,
      sub_id: environment['x-api-key'],
    };
    const headers = {
      'x-api-key': environment['x-api-key'],
      'Content-Type': 'application/json',
    };
    return this.http.post(this.baseUrl + '/favourites', body, {
      headers,
    });
  }
}
