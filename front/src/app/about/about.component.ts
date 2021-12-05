import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { AboutService } from './about.service';
import { Breed } from '../models/breed';
import { Picture } from '../models/picture';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  breed_id: string = '';
  breedDetail$ = new Subject<Breed>();
  pictures$ = new Subject<Picture[]>();

  constructor(
    private route: ActivatedRoute,
    private aboutService: AboutService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(map((res: any) => res.params))
      .subscribe((params) => {
        this.breed_id = params.breed;
        this.aboutService
          .getBreedInfo(this.breed_id)
          .pipe(
            map((res: any) => ({
              ...res[0].breeds[0],
              image: {
                id: res[0].id,
                width: res[0].width,
                height: res[0].height,
                url: res[0].url,
              },
            }))
          )
          .subscribe((res: any) => {
            this.breedDetail$.next(res);
          });

        this.aboutService
          .getPictures(this.breed_id)
          .subscribe((pictures: Picture[]) => {
            this.pictures$.next(pictures);
          });
      });
  }

  handleClick(picture: Picture) {
    console.log(picture);
    const imageId = picture.breeds.image.id;
    this.aboutService.like(imageId).subscribe(
      (res) => console.log(res),
      (err) => alert('이미 좋아한 사진이에요~ 🐈')
    );
  }
}
