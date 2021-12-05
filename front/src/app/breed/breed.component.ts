import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Breed } from '../models/breed';
import { BreedService } from './breed.service';
@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss'],
})
export class BreedComponent implements OnInit {
  breedList$ = new Subject<Breed[]>();

  constructor(public breedService: BreedService, private router: Router) {
    this.breedList$ = this.breedService.breedList$;
    // TODO 다른 페이지 -> Breed 로 가면 못불러온다, 왤까??
  }

  ngOnInit(): void {}

  handleClick(item: Breed) {
    this.router.navigate(['/about'], {
      queryParams: { breed: item.id },
    });
  }
}
