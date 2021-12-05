import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { LikeItem } from '../models/like-item';
import { LikeService } from './like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss'],
})
export class LikeComponent implements OnInit {
  likeList$ = new Subject<LikeItem[]>();
  constructor(private likeService: LikeService) {}

  ngOnInit(): void {
    this.likeService.getLikeList().subscribe((res: any) => {
      this.likeList$.next(res);
    });
  }

  unlike(favourite_id: string) {
    this.likeService.unlike(favourite_id).subscribe((res) => {
      console.log(res);
    });
  }

  // getLikeList(id: string) {
  //   console.log('CALL ME');
  //   return this.likeList$.pipe(
  //     tap((item: any) => console.log('->', item)),
  //     filter((item: any) => item.id === id)
  //   );
  // }
}
