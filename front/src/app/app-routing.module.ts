import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreedComponent } from './breed/breed.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LikeComponent } from './like/like.component';

const routes: Routes = [
  {
    path: '',
    component: BreedComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'like',
    component: LikeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
